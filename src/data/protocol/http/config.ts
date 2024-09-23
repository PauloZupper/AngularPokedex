import { Module } from './module';
import env from '../../../environment/env';

type MakeUrlOptions = {
  requiredParams?: Record<string, any>;
};

class MakeUrlBuilder {
  private url = '';

  private options: MakeUrlOptions = {};

  private isFirstParam = true;

  constructor(template: string) {
    this.url = template;
  }

  private applyRequiredParams() {
    !!this.options?.requiredParams &&
      Object.entries(this.options?.requiredParams).forEach(
        ([parameter, value]) => this.addQueryParam(parameter, value)
      );
  }

  setOptions(options: MakeUrlOptions) {
    this.options = options;

    return this;
  }

  interpolate(values: Record<string, unknown>) {
    this.url = Object.entries(values).reduce(
      (path, [parameter, value]) =>
        path.replace(`:${parameter}`, String(value)),
      this.url
    );

    return this;
  }

  addQueryParam(param: string, value: any) {
    if (value == null || !String(value).length) {
      return this;
    }

    const ligature = this.isFirstParam ? '?' : '&';

    const parsedValue = Array.isArray(value) ? value.join('.') : value;

    this.url = [this.url, `${param}=${parsedValue}`].join(ligature);

    this.isFirstParam = false;

    return this;
  }

  build() {
    this.applyRequiredParams();
    return this.url;
  }
}

export const makeUrl = (template: string) => new MakeUrlBuilder(template);

export const makeBaseUrl = (module: Module): string =>
  ({
    pokeApi: env['API_POKEMON'],
  }[module]);
