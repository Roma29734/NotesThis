import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavScreen from "./src/screen/mainTabNav/MainTabNavScreen";
import { StatusBar, View } from "react-native";
import AddNotesScreen from "./src/screen/addNotes/AddNotes";
import DetailNotes from "./src/screen/detailNotes/DetailNotes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#1F1E2E"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="tabNav" component={MainTabNavScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddNotes" component={AddNotesScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="DetailNotes" component={DetailNotes} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView >
  );
}

export default App;
