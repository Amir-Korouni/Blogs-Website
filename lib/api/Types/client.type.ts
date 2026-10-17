import { AppHttpError } from "../Error/client.error";

export type ClientType<T extends object = any> =
  | {
      isOk: true;
      data: T;
    }
  | {
      isOk: false;
      error: AppHttpError;
    };
