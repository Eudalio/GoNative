import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  posts: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
  },

  titulo: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },

  autor: {
    color: '#999',
    borderBottomWidth: 1,
    borderColor: '#EEE',
    paddingBottom: 5,
    fontSize: 15,
  },
  descricao: {
    color: '#666',
    paddingTop: 15,
  }
});

const Post = ({ autor, descricao }) => (
  <View style={styles.posts}>
    <Text style={styles.titulo}>
      Aprendendo React Native
    </Text>
    <Text style={styles.autor}>
      {autor}
    </Text>
    <Text style={styles.descricao}>
      {descricao}
    </Text>
  </View>
);

Post.propTypes = ({
  autor: PropTypes.string,
  descricao: PropTypes.string,
}).isRequired;

export default Post;
