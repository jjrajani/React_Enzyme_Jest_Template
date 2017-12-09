import React from 'react';
import { render } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const test = render(<App />);

  expect(test).toMatchSnapshot();
  expect(test.prop('id')).toEqual('it-worked');
});
