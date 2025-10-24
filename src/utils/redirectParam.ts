// utils/redirectParam.ts

/**
 * @param router - instance useRouter() dari next/navigation
 * @param params - object query params
 * @param path - optional, default ke path saat ini
 */
export function pushUrlParam(
  router: { push: (url: string) => void },
  params?: Record<string, any>,
  path?: string
) {
  const currentPath =
    path || (typeof window !== "undefined" ? window.location.pathname : "/");

  const newQuery = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        newQuery.delete(key);
      } else {
        newQuery.set(key, String(value));
      }
    });
  }

  const url = `${currentPath}?${newQuery.toString()}`;
  router.push(url);
}
