/**
 * Prefixes a root-relative path ("/projeler", "/images/x.webp") with Astro's
 * configured base path (import.meta.env.BASE_URL), so internal links and
 * static asset paths resolve correctly under a GitHub Pages project subpath.
 * External URLs, mailto: and tel: links are returned unchanged.
 */
export function withBase(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${trimmedBase}${normalizedPath}`;
}
