import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import React, { Component } from 'react';
import {
  Platform, ScrollView, StyleSheet, View, Text,
} from 'react-native';

import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },

  cabecalho: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  cabecalhoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        autor: 'Eudálio Sousa',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere eget mauris ac varius. Pellentesque ut erat sed ipsum facilisis varius. Mauris ut ultricies nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis suscipit risus in magna congue, id fermentum lorem pulvinar. Maecenas in congue libero.'
      },
      {
        id: 1,
        autor: 'Eudálio Sousa',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere eget mauris ac varius. Pellentesque ut erat sed ipsum facilisis varius. Mauris ut ultricies nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis suscipit risus in magna congue, id fermentum lorem pulvinar. Maecenas in congue libero.'
      },
      {
        id: 2,
        autor: 'Eudálio Sousa',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere eget mauris ac varius. Pellentesque ut erat sed ipsum facilisis varius. Mauris ut ultricies nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis suscipit risus in magna congue, id fermentum lorem pulvinar. Maecenas in congue libero.'
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.cabecalhoTitulo}>
            GoNativeApp!
          </Text>
        </View>
        <ScrollView>
          { posts.map(post => (
            <Post key={post.id} autor={post.autor} descricao={post.descricao} />
          )) }
        </ScrollView>
      </View>
    );
  }
}
