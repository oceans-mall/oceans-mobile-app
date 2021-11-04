import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import COLORS from "./src/consts/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { OnBoard } from "./src/screen/onBoard";
import { Register } from "./src/components/Authentication/Registeration";
import { Login } from "./src/components/Authentication/Login";
import { ResetPassword } from "./src/components/Authentication/ResetPassword";
import { Service } from "./src/screen/Service";
import { Sell } from "./src/screen/Sell";
import { Cart } from "./src/screen/Cart";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Reset" component={ResetPassword} />
        <Stack.Screen name="Services" component={Service} />
        <Stack.Screen name="Sell" component={Sell} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}