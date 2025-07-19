import { IParams, IQueryParams } from "@/interfaces/IBaseParams";

export const generateParams = async ({ searchParams, params }: IParams) => {
  const result: Record<string, string | number | string[]> = {};
  const rawParams = await searchParams;
  const valueParams = await params;
  const valueQueryParams = rawParams as Record<string, unknown>;

  for (const key in valueQueryParams) {
    const val = valueQueryParams[key];

    if (Array.isArray(val)) {
      result[key] = val as string[];
    } else if (val !== undefined && !isNaN(Number(val))) {
      result[key] = Number(val);
    } else {
      result[key] = (val ?? "").toString();
    }
  }

  return {
    query: result,
    param: valueParams,
  };
};
