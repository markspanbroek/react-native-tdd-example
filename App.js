import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, Button } from 'react-native'

const App = () => {
  let [message, setMessage] = useState('')
  let [messages, setMessages] = useState([])
  return (
    <SafeAreaView>
      <Text>Welcome</Text>
      <TextInput 
        placeholder='Type a message'
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title='Send' onPress={() => {
        setMessages(messages.concat(message))
        setMessage('')
      }}/>
      {
        messages.map((message, index) => <Text key={index}>{message}</Text>)
      }
    </SafeAreaView>
  )
}

export default App;
