import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

const Todo = props => (
    <View>
        <Text>{props.title}</Text>
    </View>
);

Todo.defaultProps = {
  title: 'Todo Padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

const style = StyleSheet.create({

});

export default Todo;
