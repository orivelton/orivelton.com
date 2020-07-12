import React from 'react';
import renderer from 'react-test-renderer';
import Bio from '../components/Bio';

describe('src/components/Bio.js', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Bio />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
