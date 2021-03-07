import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { View, StatusBar } from 'react-native';

import Routes from './routes';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <View style={{ backgroundColor: '#312e38', flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
