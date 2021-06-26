import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';
import { UserParamList } from './UserParamList';
import BemVindo from './BemVindo';

export default function Routes() {
  const Stack = createStackNavigator<UserParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="BemVindo">
        <Stack.Screen name="Login" component={Login} options={{
          header: () => null
        }} />
        <Stack.Screen name="BemVindo" component={BemVindo}  options={{
            header: () => null 
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}