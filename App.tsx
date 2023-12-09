import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MainTabNavScreen from "./src/screen/mainTabNav/MainTabNavScreen";
import { StatusBar, useColorScheme, View } from "react-native";
import AddNotesScreen from "./src/screen/addNotes/AddNotes";
import DetailNotes from "./src/screen/detailNotes/DetailNotes";
import ThemeSettings from "./src/screen/appSettings/ThemeSettings";
import { useThemeColor } from "./src/assets/Theme";
import { DetailRemoteNote } from "./src/screen/detailNotes/DetailRemoteNote";
import { AddRemoteNoteScreen } from "./src/screen/addNotes/AddRemoteNote";

const Stack = createNativeStackNavigator();

function App() {
  const colorTheme = useThemeColor()
  return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={colorTheme.Accent}
          barStyle="default"
        />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="tabNav" component={MainTabNavScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddNotes" component={AddNotesScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="DetailNotes" component={DetailNotes} options={{headerShown: false}}/>
            <Stack.Screen name='NameThemeSettings' component={ThemeSettings} options={{headerShown: false}}/>
            <Stack.Screen name='DetailRemoteNote' component={DetailRemoteNote} options={{headerShown: false}}/>
            <Stack.Screen name='AddRemoteNote' component={AddRemoteNoteScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

export default App;


