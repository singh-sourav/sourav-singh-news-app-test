
import React from 'react';
import { Provider } from 'react-redux';
import { createMyStore } from './store';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import NewsDetail from './containers/NewsDetail';
import HomeScreen from './containers/NewsList';


const store= createMyStore();

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: NewsDetail,
    },
  },
  {
    initialRouteName: 'Home',
  }
);


const AppContainer = createAppContainer(RootStack);

const App = () => (
  <Provider store={store}>
   <AppContainer/>
  </Provider>
);


export default App;