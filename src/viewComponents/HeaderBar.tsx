import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '../assets/Theme';
import React from 'react';

// @ts-ignore

const HeaderBar = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontSize: 20,
    marginTop: 24,
    justifyContent: 'center',
    color: COLORS.BlackMain,
    fontFamily: FONT_FAMILY.is_tok_web_bold,
  },
});

export default HeaderBar;
