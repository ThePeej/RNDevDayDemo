import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';

const GREETINGS = ['Hello', 'Hi', 'Howdy', 'Salutations', 'Sup'];

export default class App extends Component {
  state = {
    greeting: GREETINGS[0]
  };

  handleButtonPress = () => {
    const index = GREETINGS.indexOf(this.state.greeting);
    if (index < GREETINGS.length - 1) {
      this.setState({ greeting: GREETINGS[index + 1] });
    } else {
      this.setState({ greeting: GREETINGS[0] });
    }
  };

  render() {
    const { greeting } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{greeting}, world!</Text>
        <Picker
          selectedValue={greeting}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => this.setState({ greeting: itemValue })}>
          {GREETINGS.map(g => {
            return <Picker.Item key={g} label={g} value={g} />
          })}
        </Picker>
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
    fontSize: 24,
  },
  picker: {
    margin: 45,
    padding: 15,
    width: 200,
  }
});
