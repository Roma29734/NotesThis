import { Appearance, ColorSchemeName, useColorScheme } from "react-native";
import { ToDoItem } from "../data/model/ToDoItemModel";
import { useTheme } from "@react-navigation/native";
import * as React from 'react';

export const useThemeColor = () => {
  const colorScheme = useColorScheme();
  if (colorScheme == 'light') {
    console.log('return light');
    return COLORSLight;
  } else {
    console.log('return dark');
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
  AccentLight: "#F6F7F9",
  SimpleBlack: "#000000",
  GrayAppSettingsDark: '#7E8A95',
};

export const COLORSLight = {
  Accent: COLORS.AccentLight,
  BottomIcFocus: COLORS.BlackBackground,
  BottomIcNotFocus: COLORS.LightGray,
  TextAssistant: COLORS.BlackMain,
  BackgroundMain: COLORS.WhiteMain,
  SlideAppSettingsBackground: COLORS.SimpleBlack,
};

export const COLORSDark = {
  Accent: COLORS.BlackMain,
  BottomIcFocus: COLORS.WhiteMain,
  BottomIcNotFocus: COLORS.LightGray,
  TextAssistant: COLORS.AccentLight,
  BackgroundMain: COLORS.BlackBackground,
  SlideAppSettingsBackground: COLORS.GrayAppSettingsDark,
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
