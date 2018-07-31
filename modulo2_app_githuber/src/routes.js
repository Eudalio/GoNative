import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';

const createNavigator = (isLogged = false) => StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, {
  initialRouteName: isLogged ? 'User' : 'Welcome',
});

export default createNavigator;
