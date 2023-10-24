import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./src/Screens/Navigation/BottomTabs";
import Welcome from "./src/Screens/Welcome";
import Login from "./src/Screens/Login";
import Notifications from "./src/Screens/Notification";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={BottomTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notifications"
          component={Notifications}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
