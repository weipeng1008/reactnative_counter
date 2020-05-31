import React , {useState} from 'react';
//import {useState}
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[number, setNumber] = useState(0)
  //number=variabele =0 ; setNumber=function to change the variable
  //How to create variable/state on react
  //useState(0) --> Initialize

  const decrement = () => {
    if (number == 0){
      alert('Number cannot be smaller than 0')
    }
    else {
      setNumber(number-1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Counter App!</Text>
      <Text style={styles.subHeading}>Let's start</Text>
      <Text style={styles.text}>{number}</Text>

      <Button onPress={()=> setNumber(number+1)} title="Increment" color="green" />
      <Text style={styles.space}/>
      <Button onPress={decrement} title="Decrement" color="red" />
      <Text style={styles.space}/>
      <Button onPress={()=> setNumber(0)} title="Reset" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: 'grey',
    fontSize: 30
  },

  subHeading: {
    color: 'green',
    fontSize: 15
  },

  text: {
    fontSize: 40,
    padding: 15
  },

  space: {
    marginTop: 10
  }

});
