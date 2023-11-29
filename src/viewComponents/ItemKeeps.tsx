import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '../assets/Theme';
import {ToDoItem} from '../data/model/ToDoItemModel';
import React from 'react';

const ItemKeeps: React.FC<{
  todo: ToDoItem;
}> = ({todo: {id}}) => {
  return (
    <View style={styles.MainContainerView}>
      {}
      <Text style={styles.HeaderText}>
        This is Title from my notes in Notes This application. Это заголовок
        моей заметки в приложении Notes This ${id}
      </Text>
      <Text style={styles.DateText}>28/11/2023</Text>
    </View>
  );
};
export default ItemKeeps;

const styles = StyleSheet.create({
  HeaderText: {
    fontSize: 25,
    marginTop: 16,
    marginStart: 16,
    color: COLORS.BlackMain,
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
    flexDirection: 'column',
    backgroundColor: COLORS.HoneydewContrast,
    borderRadius: 24,
  },
});
