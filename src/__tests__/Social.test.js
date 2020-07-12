import React from 'react';
import renderer from 'react-test-renderer';
import Social from '../components/Social';

describe('src/components/Social.js', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Social />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
