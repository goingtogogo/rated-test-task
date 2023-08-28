
import '@testing-library/jest-dom'

import { Name } from './Name';
import { render } from '@/utils/testUtils';

describe('table cell Name component', () => {
  it('should render bot emoji when URL is invalid', () => {
    const row = {
      original: {
        name: 'Test Exchange',
        image: 'invalid-url',
      },
    };

    // @ts-ignore
    const { getByText } = render(<Name row={row} />);
    const botEmoji = getByText('🤖');

    expect(botEmoji).toBeInTheDocument();
  });

  it('should render Image component when URL is valid', () => {
    const row = {
      original: {
        name: 'Test Exchange',
        image: 'https://example.com/logo.png',
      },
    };

    // @ts-ignore
    const { getByAltText } = render(<Name row={row} />);
    const image = getByAltText('Test Exchange logo');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(row.original.image)));
  });
});