import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Todo extends Component {
    static defaultProps = {
      title: 'Todo Padrão',
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