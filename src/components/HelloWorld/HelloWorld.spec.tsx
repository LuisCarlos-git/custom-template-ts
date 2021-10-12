import { render, screen } from '@testing-library/react';
import HelloWorld from '.';

describe('<HelloWorld />', () => {
  it('should render HelloWorld elements', () => {
    render(<HelloWorld />);

    expect(
      screen.getByRole('heading', { name: 'Welcome my custom template' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'https://github.com/LuisCarlos-git' })
    ).toBeInTheDocument();
  });
});
