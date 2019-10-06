import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GREETINGS = ['Hello', 'Hi', 'Howdy', 'Salutations', 'Sup'];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {GREETINGS.map(greeting => {
          return <Text key={greeting} style={styles.title}>{greeting}, world!</Text>
        })}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
  },
  buttonText: {
    fontSize: 24,
  },
  button: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 45,
    padding: 15,
  }
});
