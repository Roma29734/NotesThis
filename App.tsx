import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// @ts-ignore
import Home from "./src/screen/home/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
