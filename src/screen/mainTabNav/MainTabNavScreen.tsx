import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, Platform, StyleSheet } from "react-native";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";
import Local from "../local/Local";
import Remote from "../remote/Remote";
import Icon from "react-native-vector-icons/Ionicons";
import Profile from "../profile/Profile";
import { useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();

const MainTabNavScreen = () => {
  const colorTheme = useThemeColor()
  const styleComponent = styles(colorTheme)


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styleComponent.tabBarStyle
      }}>
      <Tab.Screen
        name="Remote"
        component={Remote}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/image/ic_remote.png")}
              resizeMode={"contain"}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ?
                  colorTheme.BottomIcFocus : colorTheme.BottomIcNotFocus
            }}
            />
          )
        }}></Tab.Screen>
      <Tab.Screen
        name="Local"
        component={Local}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/image/ic_local.png")}
              resizeMode={"contain"}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ?
                  colorTheme.BottomIcFocus : colorTheme.BottomIcNotFocus
            }}
            />
          )
        }}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/image/ic_profile.png")}
              resizeMode={"contain"}
              style={{
                width: 30,
                height: 30,
                tintColor: focused ?
                  colorTheme.BottomIcFocus : colorTheme.BottomIcNotFocus
              }}
            />
          )
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = (color: UIColor) => StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: color.Accent,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent"
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});


export default MainTabNavScreen;
