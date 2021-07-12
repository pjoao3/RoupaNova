import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import BemVindo from "./pages/BemVindo";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";
import Redefinir from "./pages/Redefinir";

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BemVindo">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="BemVindo"
          component={BemVindo}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Redefinir"
          component={Redefinir}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
