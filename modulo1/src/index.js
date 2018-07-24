import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';

import Todo from './components/Todo'

const todos = [
  'Fazer café',
  'Estudar o GoNative',
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        { todos.map(todo => <Todo title={todo} />) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
