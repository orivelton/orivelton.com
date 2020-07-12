import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../components/Layout';

describe('src/components/Layout.js', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Layout />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
