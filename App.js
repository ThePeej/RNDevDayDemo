import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GREETINGS = ['Hello', 'Hi', 'Howdy', 'Salutations', 'Sup'];

export default class App extends Component {
  state = {
    greeting: GREETINGS[0]
  }

  handleButtonPress = () => {
    const index = GREETINGS.indexOf(this.state.greeting);
    if (index < GREETINGS.length - 1) {
      this.setState({ greeting: GREETINGS[index + 1] });
    } else {
      this.setState({ greeting: GREETINGS[0]});
    }
  }

  render() {
    const { greeting } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{greeting}, world!</Text>
        <TouchableOpacity
          onPress={this.handleButtonPress}
          style={styles.button}>
          <Text style={styles.buttonText}>Switch it up</Text>
        </TouchableOpacity>
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
