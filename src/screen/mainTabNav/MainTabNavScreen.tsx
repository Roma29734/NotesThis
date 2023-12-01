import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, Platform, StyleSheet } from "react-native";
import { COLORS } from "../../assets/Theme";
import Local from "../local/Local";
import Remote from "../remote/Remote";
import Icon from "react-native-vector-icons/Ionicons";
import Profile from "../profile/Profile";

const Tab = createBottomTabNavigator();

const MainTabNavScreen = () => {

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle
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
                  COLORS.WhiteMain : COLORS.GrayMain
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
                  COLORS.WhiteMain : COLORS.GrayMain
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
                  COLORS.WhiteMain : COLORS.GrayMain
              }}
            />
          )
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.BlackMain,
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
