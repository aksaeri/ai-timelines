/**
 * TED-AI Timelines — one-shot setup script.
 *
 * Creates the Google Form, the linked Sheet, sets the Sheet to public-read,
 * and prints a ready-to-paste config.js block to the Apps Script log.
 *
 * Usage:
 *   1. Open https://script.google.com → New project.
 *   2. Replace the default Code.gs contents with this file.
 *   3. Run setupTedAiForm. Authorize when prompted (Forms, Sheets, Drive).
 *   4. Open View → Logs (or Executions → latest run). Copy the printed
 *      config block into site/config.js.
 *
 * Re-running creates a fresh Form + Sheet each time.
 */
function setupTedAiForm() {
  const form = FormApp.create('TED-AI Timelines — Group Elicitation');
  form.setDescription(
    'TED-AI: an AI system at least as good as top human experts at ' +
    'virtually all cognitive tasks. Operationally: given the resources of ' +
    'a large tech company and three months to prepare, it could fully ' +
    'automate 95% of remote-work jobs in the US. ' +
    'Definition from the AI Futures Project.\n\n' +
    'Enter five quantile years (e.g. 2032). Ordering must hold: ' +
    'p10 < p25 < p50 < p75 < p90.'
  );
  form.setCollectEmail(false);
  form.setShowLinkToRespondAgain(false);
  form.setAllowResponseEdits(false);

  const fields = [
    { key: 'name', title: 'Name or initials',
      desc: 'Optional. Used to label your curve on the shared screen.',
      required: false },
    { key: 'p10', title: 'p10 — 10% chance before this year',
      desc: 'Mildly surprised if TED-AI arrived before this year — a deliberate contrarian call.',
      required: true },
    { key: 'p25', title: 'p25 — 25% chance before this year',
      desc: 'Real possibility, default is still no.',
      required: true },
    { key: 'p50', title: 'p50 — Median (50% chance by this year)',
      desc: 'A coin flip — you would take either side of an even-odds bet.',
      required: true },
    { key: 'p75', title: 'p75 — 75% chance before this year',
      desc: 'Somewhat surprised if TED-AI still has not arrived — the later outcome is what would need explaining.',
      required: true },
    { key: 'p90', title: 'p90 — 90% chance before this year',
      desc: 'Genuinely surprised — reaching for stories about what went wrong.',
      required: true },
    { key: 'gut', title: 'Gut P(TED-AI by 2030), %',
      desc: 'Without looking at your distribution: gut probability (0-100) that TED-AI arrives before end of 2030.',
      required: false },
  ];

  const entries = {};
  for (const f of fields) {
    const item = form.addTextItem()
      .setTitle(f.title)
      .setHelpText(f.desc)
      .setRequired(f.required);
    entries[f.key] = 'entry.' + item.getId();
  }

  const ss = SpreadsheetApp.create('TED-AI Timelines — Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  SpreadsheetApp.flush();

  DriveApp.getFileById(ss.getId()).setSharing(
    DriveApp.Access.ANYONE_WITH_LINK,
    DriveApp.Permission.VIEW
  );

  const refreshed = SpreadsheetApp.openById(ss.getId());
  const responseSheet = refreshed.getSheets().find(s => /^Form Responses/i.test(s.getName()))
    || refreshed.getSheets()[0];
  const gid = responseSheet.getSheetId();

  const formUrl = form.getPublishedUrl().replace('/viewform', '/formResponse');

  const configBlock =
    'window.TEDAI_CONFIG = {\n' +
    '  FORM_URL: "' + formUrl + '",\n' +
    '  FORM_ENTRIES: {\n' +
    Object.entries(entries).map(([k, v]) => '    ' + k + ': "' + v + '",').join('\n') + '\n' +
    '  },\n' +
    '  SHEET_ID: "' + ss.getId() + '",\n' +
    '  GID: "' + gid + '",\n' +
    '};';

  Logger.log('===== Paste into site/config.js =====');
  Logger.log(configBlock);
  Logger.log('=====================================');
  Logger.log('Form (edit):   ' + form.getEditUrl());
  Logger.log('Form (live):   ' + form.getPublishedUrl());
  Logger.log('Sheet:         ' + refreshed.getUrl());
}
