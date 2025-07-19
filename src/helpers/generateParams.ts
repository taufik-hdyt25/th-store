import { IParams, IQueryParams } from "@/interfaces/IBaseParams";

export const generateParams = async ({ searchParams }: IParams) => {
  const result: Record<string, string | number | string[]> = {};
  const rawParams = await searchParams;
  const params = rawParams as Record<string, unknown>;

  for (const key in params) {
    const val = params[key];

    if (Array.isArray(val)) {
      result[key] = val as string[];
    } else if (val !== undefined && !isNaN(Number(val))) {
      result[key] = Number(val);
    } else {
      result[key] = (val ?? "").toString();
    }
  }

  return result;
};
