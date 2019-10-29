import 'react-native';
import React from 'react';
import App from '../App';

import { render } from 'react-native-testing-library'
import expectExport from 'expect';

it('welcomes', () => {
  const { queryByText } = render(<App />)
  expect(queryByText('Welcome')).not.toBeNull()
})

it('shows messages', () => {
  const messages = [
    "First message",
    "Some other message"
  ]
  const { queryByText } = render(<App messages={messages} />)
  messages.forEach(message => {
    expect(queryByText(message)).not.toBeNull()
  })
})

it('has an input field for messages', () => {
  const { queryByPlaceholder } = render(<App />)
  expect(queryByPlaceholder('Type a message')).not.toBeNull()
})
