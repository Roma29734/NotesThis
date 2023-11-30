import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_FAMILY } from "../assets/Theme";
import React from "react";
import ImageBack from "./ImageBack";

// @ts-ignore
const HeaderBarTitleButton = ({ title, BackHandler }) => {

  // @ts-ignore
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={() => {
        BackHandler();
      }}>
        <ImageBack visible={true} />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{title}</Text>
      <ImageBack visible={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.BlackMain
  },
  HeaderText: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: "center",
    color: COLORS.WhiteMain,
    fontFamily: FONT_FAMILY.is_tok_web_bold
  }
});

export default HeaderBarTitleButton;
