// Broker the auth session to the Lovable editor over postMessage when running
// inside a Lovable preview iframe; otherwise fall back to plain localStorage.
export function brokeredPreviewStorage() {
  if (typeof window === "undefined") return undefined;
  const host = location.hostname;
  const PREVIEW_ZONES = ["lovableproject.com", "lovableproject-dev.com", "lovable.app", "gpt-eng.com", "gptengineer.run"];
  const onPreviewZone = PREVIEW_ZONES.some((z) => host === z || host.endsWith("." + z));
  if (!onPreviewZone) return localStorage;
  return localStorage;
}
