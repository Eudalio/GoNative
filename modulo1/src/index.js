import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Button,
} from 'react-native';

import Todo from './components/Todo'

export default class App extends Component {
  state = {
    usuario: 'Eudálio',
    todos: [
      'Fazer café',
      'Estudar o GoNative',
    ],
  };

  addTodo = () => {
    this.setState({ 
      usuario: this.state.usuario + '1', 
      todos: [ ...this.state.todos, 'Novo Todo'] 
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> { this.state.usuario } </Text>
        { this.state.todos.map(todo => <Todo title={todo} />) }
        <Button title='Adicionar Todo' onPress={this.addTodo} />
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
