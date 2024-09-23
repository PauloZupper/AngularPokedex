export type Module = 'pokeApi';

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notAcceptable = 406,
  notFound = 404,
  serverError = 500,
}

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type HttpRequest<T = any> = {
  url: string;
  method: HttpMethod;
  body?: T;
  headers?: Record<string, string>; // Tipo específico para cabeçalhos
  asBlob?: boolean;
};

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  data: T;
  headers?: Record<string, string>; // Tipo específico para cabeçalhos
};

export interface HttpClient<R = any> {
  request: (data: HttpRequest<any>) => Promise<HttpResponse<R>>;
}
