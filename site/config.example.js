// Copy to config.js and fill in your own Form + Sheet. config.js is gitignored.
// The screen page loads this as ../config.js.
window.TEDAI_CONFIG = {
  // Google Form "formResponse" endpoint. Get it from the live Form URL by
  // replacing /viewform with /formResponse.
  FORM_URL: "https://docs.google.com/forms/d/e/REPLACE_FORM_ID/formResponse",

  // Entry IDs for each field. Extract by opening the Form, picking
  // "Get pre-filled link", filling dummy values, and copying entry.XXXX from
  // the generated URL. Alternatively grep the Form HTML for FB_PUBLIC_LOAD_DATA_.
  FORM_ENTRIES: {
    name: "entry.0000000000",
    p10:  "entry.0000000000",
    p25:  "entry.0000000000",
    p50:  "entry.0000000000",
    p75:  "entry.0000000000",
    p90:  "entry.0000000000",
    gut:  "entry.0000000000",
  },

  // Google Sheet that receives responses. Must be shared "Anyone with link → Viewer"
  // so the screen page can fetch the public CSV export.
  SHEET_ID: "REPLACE_SHEET_ID",
  GID: "0",
};
