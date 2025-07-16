// utils/parseSearchParamsToNumberObject.ts

type Params = Record<string, string | undefined | null>;
type ParsedParams<T extends Record<string, number>> = T;

/**
 * Parse search params menjadi object number dengan fallback default
 * @param rawParams - Object dari searchParams (Next.js server component) atau hasil dari URLSearchParams
 * @param defaults - Default value untuk setiap key jika value tidak valid
 */
export function parseSearchParamsToNumberObject<
  T extends Record<string, number>
>(rawParams: Params, defaults: T): ParsedParams<T> {
  const parsed: Partial<Record<keyof T, number>> = {};

  for (const key in defaults) {
    const rawValue = rawParams[key];
    const num = Number(rawValue);

    parsed[key] = !isNaN(num) ? num : defaults[key];
  }

  return parsed as ParsedParams<T>;
}
