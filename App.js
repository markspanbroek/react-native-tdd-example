import React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native'

const App = ({ messages = ["one", "two"] } = {}) =>(
  <SafeAreaView>
    <Text>Welcome</Text>
    <TextInput placeholder="Type a message" />
    { messages.map((message,index) =>
      <Text key={index}>{message}</Text>
    )}

  </SafeAreaView>
)

export default App;
