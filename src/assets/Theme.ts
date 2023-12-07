import { Appearance, ColorSchemeName, useColorScheme } from "react-native";
import { ToDoItem } from "../data/model/ToDoItemModel";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { getStateThemeAppData } from "../data/localData/MmkvStorageData";

export const useThemeColor = () => {
  const colorScheme = useColorScheme();
  const stateThemeApp = getStateThemeAppData();
  console.log(`stateThemeApp ${stateThemeApp}`)

  if(stateThemeApp == 'light') {
    Appearance.setColorScheme('light')
  } else if(stateThemeApp == 'dark') {
    Appearance.setColorScheme('dark')
  } else if(stateThemeApp == 'system') {
    Appearance.setColorScheme(null)
  }

  if (colorScheme == "light") {
    console.log("return light");
    return COLORSLight;
  } else {
    console.log("return dark");
    return COLORSDark;
  }
};

export const COLORS = {
  HoneydewContrast: "#E4FFE6",
  BlackMain: "#202d3a",
  WhiteMain: "#FFFFFF",
  GrayMain: "#494646",
  BlackBackground: "#0f1823",
  LightGray: "#808080",
  AccentLight: "#e2e3e5",
  SimpleBlack: "#000000",
  GrayAppSettingsDark: "#7E8A95",
  BrandAccentLight: "#079B7F"
};

export const COLORSLight = {
  Accent: COLORS.AccentLight,
  BottomIcFocus: COLORS.BrandAccentLight,
  BottomIcNotFocus: COLORS.LightGray,
  TextAssistant: COLORS.BlackMain,
  BackgroundMain: COLORS.WhiteMain,
  SlideAppSettingsBackground: COLORS.BrandAccentLight,
  RadioButtonActive: COLORS.SimpleBlack,
  RadioButtonUnchecked: COLORS.GrayAppSettingsDark,
  BaseReturnedSimple: COLORS.WhiteMain,
  CardNote: COLORS.BrandAccentLight
};

export const COLORSDark = {
  Accent: COLORS.BlackMain,
  BottomIcFocus: COLORS.WhiteMain,
  BottomIcNotFocus: COLORS.LightGray,
  TextAssistant: COLORS.AccentLight,
  BackgroundMain: COLORS.BlackBackground,
  SlideAppSettingsBackground: COLORS.GrayAppSettingsDark,
  RadioButtonActive: COLORS.WhiteMain,
  RadioButtonUnchecked: COLORS.AccentLight,
  BaseReturnedSimple: COLORS.SimpleBlack,
  CardNote: COLORS.HoneydewContrast
};

export type UIColor = typeof COLORSLight | typeof COLORSDark

interface FontFamily {
  is_tok_web_bold: string;
  is_tok_web_regular: string;
}

export const FONT_FAMILY: FontFamily = {
  is_tok_web_bold: "istokWeb-Bold.ttf",
  is_tok_web_regular: "IstokWeb-Regular"
};
