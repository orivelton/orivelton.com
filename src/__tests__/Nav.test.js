import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

describe('src/components/Nav.js', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Nav />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
