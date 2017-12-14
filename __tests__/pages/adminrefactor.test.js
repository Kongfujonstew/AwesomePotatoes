import React from 'react';
// import Link from '../Link.react';
import renderer from 'react-test-renderer';

import Admin from '../../pages/adminrefactor';

it('renders correctly', () => {
  const tree = renderer
    .create(<Admin/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});