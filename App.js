import React from 'react';
import { Text, SafeAreaView, TextInput, Button } from 'react-native'

const App = () => (
  <SafeAreaView>
    <Text>Welcome</Text>
    <TextInput placeholder="Type a message" />
    <Button title='Send' />
  </SafeAreaView>
)

export default App;
