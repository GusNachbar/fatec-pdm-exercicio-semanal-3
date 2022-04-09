import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default class extends React.Component {
// const v = useState('Texto inicial');
constructor (props){
  super(props);
  this.state = {
    numeros: [
      Math.floor(Math.random() * 61),
      Math.floor(Math.random() * 61),
      Math.floor(Math.random() * 61),
      Math.floor(Math.random() * 61),
      Math.floor(Math.random() * 61),
      Math.floor(Math.random() * 61)
    ],
    numero: Math.floor(Math.random() * 61),
  }
}

render(){
  return(
    <View style={styles.container}>
      <Text>{this.state.numeros}</Text>
      <Button
        title='Ok'
        onPress={() => this.setState({
          numeros: this.state.numeros.push(this.state.numero)
        })}/>
    </View>
  )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
