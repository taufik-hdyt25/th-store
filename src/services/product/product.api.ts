import callAPI from "@/utils/fetcher/fetcher";

export const getListProductFromAPI = () =>
  callAPI({
    method: "GET",
    servicesPath: "posts",
  });

export const postProductFromAPI = (params: any) =>
  callAPI({
    method: "GET",
    servicesPath: "product",
    params,
  });

export const putProductFromAPI = (id: any, params: any) =>
  callAPI({
    method: "GET",
    servicesPath: `product/${id}`,
    params,
  });

export const deleteProductFromAPI = (id: any) =>
  callAPI({
    method: "GET",
    servicesPath: `product/${id}`,
  });
