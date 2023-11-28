import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONT_FAMILY} from '../assets/Theme';

const ItemKeeps = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={styles.MainContainerView}>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Text style={styles.HeaderText}>
        This is Title from my notes in Notes This application. Это заголовок
        моей заметки в приложении Notes This
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
    flexDirection: 'column',
    backgroundColor: COLORS.HoneydewContrast,
    borderRadius: 24,
  },
});
