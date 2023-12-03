import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '../assets/Theme';
import React from 'react';
import ImageBack from "./ImageBack";

// @ts-ignore

const HeaderBarSimpleTitle = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BlackMain
  },
  HeaderText: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,
    marginStart: 24,
    justifyContent: 'center',
    color: COLORS.WhiteMain,
    fontFamily: FONT_FAMILY.is_tok_web_bold,
  },
});

export default HeaderBarSimpleTitle;
