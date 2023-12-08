import {StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT_FAMILY, UIColor, useThemeColor } from "../assets/Theme";
import {ToDoItem} from '../data/model/ToDoItemModel';
import React from 'react';

const ItemKeeps = ({valueTitle, createData}: any) => {

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);
  return (
    <View style={styleComponent.MainContainerView}>
      {}
      <Text style={styleComponent.HeaderText}>
        {valueTitle}
      </Text>
      <Text style={styleComponent.DateText}>{createData}</Text>
    </View>
  );
};
export default ItemKeeps;

const styles= (color: UIColor) => StyleSheet.create({
  HeaderText: {
    fontSize: 25,
    marginTop: 16,
    marginStart: 16,
    color: color.BaseReturnedSimple,
    fontFamily: FONT_FAMILY.is_tok_web_bold,
  },
  DateText: {
    fontSize: 18,
    color: COLORS.GrayMain,
    textAlign: 'right',
    marginBottom: 16,
    marginEnd: 16,
    marginTop: 16,
    fontFamily: FONT_FAMILY.is_tok_web_regular,
  },
  MainContainerView: {
    marginStart: 24,
    marginEnd: 24,
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'column',
    backgroundColor: color.CardNote,
    borderRadius: 24,
  },
});
