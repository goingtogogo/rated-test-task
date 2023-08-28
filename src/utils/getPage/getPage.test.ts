import { getPage } from './getPage';
import { DEFAULT_PAGE } from '../constants';

describe('getPage function', () => {
  it('should return DEFAULT_PAGE + 1 if no arguments are provided', () => {
    const result = getPage();
    expect(result).toBe(DEFAULT_PAGE + 1);
  });

  it('should return the provided page number when a positive number is provided', () => {
    const pageNumber = 3;
    const result = getPage(pageNumber);
    expect(result).toBe(pageNumber);
  });

  it('should convert string page to number and return it if its a positive number', () => {
    const pageNumber = '5';
    const result = getPage(pageNumber);
    expect(result).toBe(Number(pageNumber));
  });

  it('should return DEFAULT_PAGE + 1 when a non-positive number is provided', () => {
    const pageNumber = -2;
    const result = getPage(pageNumber);
    expect(result).toBe(DEFAULT_PAGE + 1);
  });

  it('should return DEFAULT_PAGE + 1 when an invalid string is provided', () => {
    const pageNumber = 'invalid';
    const result = getPage(pageNumber);
    expect(result).toBe(DEFAULT_PAGE + 1);
  });

});