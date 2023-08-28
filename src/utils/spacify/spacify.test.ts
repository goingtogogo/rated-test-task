import { spacify } from './spacify';

describe('spacify function', () => {
  it('should add spaces as a thousands separator', () => {
    const input = '1234567890.42';
    const expectedOutput = '1 234 567 890.42';

    const result = spacify(input);

    expect(result).toBe(expectedOutput);
  });

  it('should handle small numbers', () => {
    const input = '123';
    const expectedOutput = '123';

    const result = spacify(input);

    expect(result).toBe(expectedOutput);
  });

  it('should handle decimal-only input', () => {
    const input = '.8765';
    const expectedOutput = '.8765';

    const result = spacify(input);

    expect(result).toBe(expectedOutput);
  });

});