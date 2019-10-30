import 'react-native';
import React from 'react';
import App from '../App';

import { render, fireEvent } from '@testing-library/react-native'

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

it('shows a message when it has been sent', () => {
  const { queryByText, getByPlaceholderText, getByText } = render(<App />)
  const message = "some message"
  expect(queryByText(message)).toBeNull()
  const input = getByPlaceholderText('Type a message')
  const button = getByText('Send')
  fireEvent.changeText(input, message)
  fireEvent.press(button)
  expect(queryByText(message)).not.toBeNull()
})
