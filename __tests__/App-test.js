/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import { render } from 'react-native-testing-library'
import expectExport from 'expect';

it('welcomes', () => {
  const { queryByText } = render(<App />)
  expect(queryByText('Welcome')).not.toBeNull()
})
