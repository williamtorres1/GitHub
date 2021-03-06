import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/Login';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
  </Navigator>
);
