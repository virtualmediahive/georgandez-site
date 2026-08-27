/* Tracking/config placeholders. Replace with real IDs before launch; keep out of version control if they become sensitive. */
window.SITE_CONFIG = {
  GA_MEASUREMENT_ID: "G-XXXXXXXXXX",
  META_PIXEL_ID: "0000000000000000",
  TIKTOK_PIXEL_ID: "XXXXXXXXXXXXXXXXXXXX",
  LEAD_FORM_ENDPOINT: null,
  NEWSLETTER_ENDPOINT: null
};

function trackEvent(eventName, params) {
  params = params || {};
  if (window.dataLayer) window.dataLayer.push({ event: eventName, ...params });
  if (window.fbq) window.fbq("trackCustom", eventName, params);
  if (window.ttq && window.ttq.track) window.ttq.track(eventName, params);
  console.log("[tracking placeholder]", eventName, params);
}
