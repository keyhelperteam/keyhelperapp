/**
 * Utility function to get the correct image path for GitHub Pages deployment
 * Prepends the basePath (/keyhelperapp) when in production on GitHub Pages
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path;
}
