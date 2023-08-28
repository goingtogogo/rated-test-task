export class URLBuilder {
  private url: URL;

  constructor(apiUrl: string) {
    this.url = new URL(apiUrl);
  }

  setParams(params: { [key: string]: string | number }) {
    // @ts-ignore
    this.url.search = new URLSearchParams(params).toString();

    return this
  }

  toString() {
    return this.url.toString();
  }
}