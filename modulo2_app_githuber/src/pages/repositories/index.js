import React, { Component } from 'react';
import api from 'services/api';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';

import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositórios',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/repos`);

    this.setState({
      data: response.data,
      loading: false,
    });
  }

  renderListItem = ({ item }) => (
    <Text>{item.full_name}</Text>
  )

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}
