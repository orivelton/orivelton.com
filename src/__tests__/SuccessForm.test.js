import React from 'react';
import renderer from 'react-test-renderer';
import SuccessForm from '../components/SuccessForm';

describe('src/components/SuccessForm.js', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SuccessForm />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
