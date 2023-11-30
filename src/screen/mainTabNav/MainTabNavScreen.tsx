import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/Theme";
import Home from "../home/Home";
import Local from "../local/Local";
import Remote from "../remote/Remote";

const Tab = createBottomTabNavigator();

const MainTabNavScreen = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{

        }}></Tab.Screen>
      <Tab.Screen
        name="Local"
        component={Local}
        options={{}}></Tab.Screen>
      <Tab.Screen
        name="Remote"
        component={Remote}
        options={{
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.BlackMain,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default MainTabNavScreen;
