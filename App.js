import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Hello, world!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
