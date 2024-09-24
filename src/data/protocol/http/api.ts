import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { makeBaseUrl } from './config';
import { HttpResponse, Module } from './module';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Get = <P, R>(uri: string, params?: P) => Observable<HttpResponse<R>>;
type Post = <P, R>(uri: string, data?: P) => Observable<HttpResponse<R>>;
type Put = <P, R>(uri: string, data?: P) => Observable<HttpResponse<R>>;
type Patch = <P, R>(uri: string, data?: P) => Observable<HttpResponse<R>>;
type Delete = <P, R>(uri: string, data?: P) => Observable<HttpResponse<R>>;

// @Injectable({
//   providedIn: 'root',
// })
class Client {
  private baseUrl: string = '';
  private http: HttpClient = Inject(HttpClient)

  constructor( module: Module)  {
    this.baseUrl = makeBaseUrl(module);
  }

  get: Get = (path, params) => {
    const options = {
      headers: new HttpHeaders(),
      params: new HttpParams({ fromObject: params as any }),
    };

    return this.http.get<HttpResponse<any>>(`${this.baseUrl}${path}`, options);
  };

  post: Post = (path, data) => {
    const options = {
      headers: new HttpHeaders(),
    };

    return this.http.post<HttpResponse<any>>(
      `${this.baseUrl}${path}`,
      data,
      options
    );
  };

  put: Put = (path, data) => {
    const options = {
      headers: new HttpHeaders(),
    };

    return this.http.put<HttpResponse<any>>(
      `${this.baseUrl}${path}`,
      data,
      options
    );
  };

  patch: Patch = (path, data) => {
    const options = {
      headers: new HttpHeaders(),
    };

    return this.http.patch<HttpResponse<any>>(
      `${this.baseUrl}${path}`,
      data,
      options
    );
  };

  delete: Delete = (path, data) => {
    const options = {
      headers: new HttpHeaders(),
      body: data,
    };

    return this.http.delete<HttpResponse<any>>(
      `${this.baseUrl}${path}`,
      options
    );
  };
}

export const Api = (module: Module) => (new Client(module))
