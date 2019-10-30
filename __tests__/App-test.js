import 'react-native';
import React from 'react';
import App from '../App';

import { render, fireEvent } from '@testing-library/react-native'

var rendered

beforeEach(() => {
  rendered = render(<App />)
})

it('welcomes', () => {
  expect(rendered.queryByText('Welcome')).not.toBeNull()
})

describe('message sending', () => {
  const message = "some message"
  var input, button
  
  beforeEach(() => {
    input = rendered.getByPlaceholderText('Type a message')
    button = rendered.getByText('Send')
  })

  it('does not show a message by default', () => {
    expect(rendered.queryByText(message)).toBeNull()
  })

  it('shows a message when it has been sent', () => {
    fireEvent.changeText(input, message)
    fireEvent.press(button)
    expect(rendered.queryByText(message)).not.toBeNull()
  })
  
  it('clears the message field after a message has been sent', async () => {
    fireEvent.changeText(input, message)
    fireEvent.press(button)
    expect(input.props.value).toEqual('')
  })  
})
