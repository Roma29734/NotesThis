import React, { useEffect } from "react";
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
import { LoginAccountScreen } from "./src/screen/account/LoginAccount";
import { CreateAccountScreen } from "./src/screen/account/CreateAccount";
import i18n from "./src/assets/translate/i18n";
import { I18nextProvider } from "react-i18next";
import { ChangeLanguageScreen } from "./src/screen/appSettings/ChangeLanguage";
import { getLanguageState } from "./src/data/localData/MmkvStorageData";

const Stack = createNativeStackNavigator();

function App() {
  const colorTheme = useThemeColor();


  return (
    <I18nextProvider i18n={i18n}>
      <View style={{ flex: 1, backgroundColor: colorTheme.BackgroundMain }}>
        <StatusBar
          backgroundColor={colorTheme.Accent}
          barStyle="default"
        />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="LoginAccount" component={LoginAccountScreen}
                          options={{ headerShown: false, animation: "fade" }} />
            <Stack.Screen name="CreateAccount" component={CreateAccountScreen}
                          options={{ headerShown: false, animation: "simple_push" }} />
            <Stack.Screen name="tabNav" component={MainTabNavScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddNotes" component={AddNotesScreen}
                          options={{ headerShown: false, animation: "simple_push" }} />
            <Stack.Screen name="DetailNotes" component={DetailNotes}
                          options={{ headerShown: false, animation: "simple_push" }} />
            <Stack.Screen name="NameThemeSettings" component={ThemeSettings} options={{ headerShown: false }} />
            <Stack.Screen name="DetailRemoteNote" component={DetailRemoteNote}
                          options={{ headerShown: false, animation: "simple_push" }} />
            <Stack.Screen name="AddRemoteNote" component={AddRemoteNoteScreen}
                          options={{ headerShown: false, animation: "simple_push" }} />
            <Stack.Screen name="ChangeLanguage" component={ChangeLanguageScreen}
                          options={{ headerShown: false, animation: "simple_push" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </I18nextProvider>
  );
}

export default App;


