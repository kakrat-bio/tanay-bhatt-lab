// Send visitors and search engines from old addresses to the primary domain
// with a permanent (301) redirect, keeping the path and query string.
// Preview deployments (<hash>.tanaybhattlab.pages.dev) are left alone.
const PRIMARY = "bhattresearch.org";
const REDIRECT_HOSTS = new Set(["tanaybhattlab.pages.dev", "www.bhattresearch.org"]);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = PRIMARY;
    url.protocol = "https:";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
