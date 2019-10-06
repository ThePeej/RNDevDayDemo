import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GREETINGS = ['Hello', 'Hi', 'Howdy', 'Salutations', 'Sup'];

const Button = (props) => <TouchableOpacity
  key={props.value}
  style={styles.button}
  onPress={() => props.onPress(props.value)}>
  <Text style={styles.buttonText}>
    {props.value}
  </Text>
</TouchableOpacity>

export default class App extends Component {
  state = {
    greeting: GREETINGS[0]
  };

  handleButtonPress = (value) => {
    this.setState({ greeting: value });
  };

  render() {
    const { greeting } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{greeting}, world!</Text>
        {GREETINGS.map(g => <Button
          key={g}
          value={g}
          onPress={this.handleButtonPress} />
        )}
      </View>
    );
  }
};


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
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    padding: 15,
    width: 200,
  }
});
