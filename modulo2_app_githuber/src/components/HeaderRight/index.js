import React, { Component } from 'react';

import { TouchableOpacity, Text } from 'react-native';

export default class HeaderRight extends Component {
  signOut = () => {
    // Deslogar
  }

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    );
  }
}
