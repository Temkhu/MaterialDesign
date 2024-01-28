import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Appbar, TextInput, Button } from 'react-native-paper'
import MainAppbar from '../components/MainAppbar'
import { StyleSheet } from 'react-native'

export default function Login() {
  const [Data, setData] = useState({ username: '', password: ''})
  const [showError, setShowError] = useState(false)

  const validateAndSubmit = () => {
    setShowError(true)
    if(Data.username.length > 0 && Data.password.length > 8){
      setData({username: '', password: ''})
      setShowError(false)
    }
  }


  return (
    <>
      <MainAppbar title="Login" />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label='Username'
          value={Data.username}
          onChangeText={text => setData({ ...Data,username: text })}
          error={Data.username.length === 0 && showError}
        />
        <TextInput
          style={styles.input}
          label='Password'
          value={Data.password}
          onChangeText={text => setData({ ...Data,password:text })}
          secureTextEntry={true}
          error={Data.password.length < 8 && showError}
        />
        <Button mode="contained" style={styles.button} onPress={validateAndSubmit}>Submit</Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    margin: (16, 8, 0, 8)
  },
  button: {
    margin: (16, 8, 0, 8)
  },
});
