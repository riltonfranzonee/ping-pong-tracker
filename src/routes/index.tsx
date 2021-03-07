import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Game from '../pages/Game';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen
        name="Game"
        component={Game}
        options={{ gestureEnabled: false }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
