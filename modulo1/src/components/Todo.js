import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

export default class Todo extends Component {
    static defaultProps = {
      title: 'Todo Padrão',
    };

    static propTypes = {
        title: PropTypes.string,
    };

    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({

});