import 'react-native';
import React from 'react';
import App from '../App';

import { render } from '@testing-library/react-native'

it('welcomes', () => {
  const { queryByText } = render(<App />)
  expect(queryByText('Welcome')).not.toBeNull()
})

it('has an input field for messages', () => {
  const { queryByPlaceholderText } = render(<App />)
  expect(queryByPlaceholderText('Type a message')).not.toBeNull()
})

it('has a send button', () => {
  const { queryByText } = render(<App />)
  expect(queryByText('Send')).not.toBeNull()
})
