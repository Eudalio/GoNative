import './config/ReactotronConfig'
import './config/DevToolsConfig'

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Todo from './components/Todo';

console.tron.log("Hello");

export default class App extends Component {
  state = {
    usuario: 'Eudálio',
    todos: [
      { id: 0, text: 'Fazer café' },
      { id: 1, text: 'Estudar o GoNative' },
    ],
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: 'Novo Todo' },
      ],
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Todo title='Fazer café' />
        <Todo title='Estudar muito, muitas coisas' />
        <Todo title='Ir deixar a fêmea no trabalho. Ok' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [
      { rotateZ: '20deg' },
    ]
  },
  text: {
    color: '#FFF'
  }
});
