import {StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT_FAMILY, UIColor, useThemeColor } from "../assets/Theme";
import React from 'react';
import ImageBack from "./ImageBack";

// @ts-ignore

const HeaderBarSimpleTitle = ({title}) => {
  const colorTheme = useThemeColor()
  const styleComponent = styles(colorTheme)
  return (
    <View style={styleComponent.HeaderContainer}>
      <Text style={styleComponent.HeaderText}>{title}</Text>
    </View>
  );
};

const styles = (color: UIColor) => StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.Accent
  },
  HeaderText: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,
    marginStart: 24,
    justifyContent: 'center',
    color: color.TextAssistant,
    fontFamily: FONT_FAMILY.is_tok_web_bold,
  },
});

export default HeaderBarSimpleTitle;
