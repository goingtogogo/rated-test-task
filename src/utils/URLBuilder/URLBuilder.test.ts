import { URLBuilder } from './URLBuilder';

describe('URLBuilder class', () => {
  it('should correctly set and stringify URL with params', () => {
    const apiUrl = 'https://api.example.com';
    const params = {
      key1: 'value1',
      key2: 42,
    };
    const expectedUrl = `${apiUrl}/?key1=value1&key2=42`;

    const urlBuilder = new URLBuilder(apiUrl);
    urlBuilder.setParams(params);

    expect(urlBuilder.toString()).toBe(expectedUrl);
  });

  it('should handle an empty params object', () => {
    const apiUrl = 'https://api.example.com/';
    const expectedUrl = apiUrl;

    const urlBuilder = new URLBuilder(apiUrl);
    urlBuilder.setParams({});

    expect(urlBuilder.toString()).toBe(expectedUrl);
  });

});