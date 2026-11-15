import axios, { AxiosResponse } from "axios";
import { ClientType } from "./Types/client.type";
import { AppHttpError } from "./Error/client.error";

export const apiCall = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function safeHttpCall<T extends object>(
  fn: () => Promise<AxiosResponse<T>>,
): Promise<ClientType<T>> {
  try {
    const response = await fn();
    return {
      isOk: true,
      data: response.data,
    };
  } catch (error) {
    return {
      isOk: false,
      error: new AppHttpError(error as Error),
    };
  }
}
