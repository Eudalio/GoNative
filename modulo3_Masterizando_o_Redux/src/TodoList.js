import React from 'react';

import { connect } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TodoList = ({ todos }) => (
  <View style={styles.container}>
    { todos.map(todo => <Text>{todo}</Text>)}
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
