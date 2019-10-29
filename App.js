import React from 'react';
import { Text, SafeAreaView } from 'react-native'

const App = ({ messages = ["one", "two"] } = {}) =>(
  <SafeAreaView>
    <Text>Welcome</Text>
    { messages.map((message,index) =>
      <Text key={index}>{message}</Text>
    )}

  </SafeAreaView>
)

export default App;
