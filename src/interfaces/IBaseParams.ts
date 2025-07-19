export interface IParams {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
  params?: Promise<{ id?: string; slug?: string }>;
}

export interface IQueryParams {
  page?: number;
  length?: number;
  search?: string;
}

export interface IPagesParams {
  params?: IQueryParams;
}
