import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavScreen from "./src/screen/mainTabNav/MainTabNavScreen";
import { StatusBar, View } from "react-native";
import AddNotesScreen from "./src/screen/addNotes/AddNotes";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="tabNav" component={MainTabNavScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddNotes" component={AddNotesScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
}

export default App;
