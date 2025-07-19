export interface IParams {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
  params?: Promise<{ slug: string }>;
}

export interface IQueryParams {
  page?: number;
  length?: number;
  search?: string;
}
