import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface CallAPIProps {
  method: Method;
  servicesPath: string;
  url?: string;
  type?: string;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  baseURL?: string;
}

const callAPI = async <T = any>({
  method,
  servicesPath,
  url = "",
  type,
  params,
  headers = {},
  baseURL,
}: CallAPIProps): Promise<T> => {
  try {
    const finalURL = type
      ? `/${type}${servicesPath}/${url}`
      : url
      ? `${servicesPath} /${url}`
      : `${servicesPath}`;

    const config: AxiosRequestConfig = {
      baseURL: baseURL,
      url: finalURL,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...(method === "GET" ? { params } : { data: params }),
    };

    const response = await axiosInstance.request<T>(config);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export default callAPI;
