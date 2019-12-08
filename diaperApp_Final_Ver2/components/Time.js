import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Time extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text h2> {this.state.date.toLocaleTimeString()}.</Text>
        </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Time/>
    );
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