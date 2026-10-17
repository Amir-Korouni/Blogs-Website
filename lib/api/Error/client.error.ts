import { AxiosError, isAxiosError } from "axios";

export class AppHttpError extends Error {
  private readonly _originalError: Error | AxiosError;
  constructor(error: Error | AxiosError) {
    super(error.message);
    this._originalError = error;
  }

  get isAxiosError(): boolean {
    return isAxiosError(this._originalError);
  }

  public get statusCode() {
    if (this.isAxiosError) {
      return (this._originalError as AxiosError).status || 0;
    }
    return -1;
  }

  get displayMsg() {
    switch (this.statusCode) {
      case 404:
        return "ٔNot Found";
      case 403:
        return "Not Access";
      case 500:
        return "Internal application error.";
      case 402:
        return "Payment is required.";
      case 502:
        return "Internal Network Error";
      default:
        return "Unknown Error";
    }
  }

  redirect() {
    window.location.href = `/${this.statusCode}?source=${window.location.href}`;
  }
}
