import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../components/Logo';

describe('src/components/Logo.js', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Logo />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
