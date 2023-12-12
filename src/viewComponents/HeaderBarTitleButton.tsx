import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_FAMILY, UIColor, useThemeColor } from "../assets/Theme";
import React from "react";
import ImageBack from "./ImageBack";
import ImageDelete from "./ImageDelete";

const HeaderBarTitleButton = ({ title, BackHandler, showDeleteItem, DeleteHandler }: any) => {


  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);
  return (
    <View style={styleComponent.HeaderContainer}>
      <TouchableOpacity onPress={() => {
        BackHandler();
      }}>
        <ImageBack visible={true} />
      </TouchableOpacity>
      <Text style={styleComponent.HeaderText}>{title}</Text>
      {showDeleteItem == true &&
        <TouchableOpacity onPress={() => {
          DeleteHandler();
          BackHandler();
        }}>
          <ImageDelete visible={true} />
        </TouchableOpacity>}
      {showDeleteItem == false && <ImageBack visible={false} />}
    </View>
  );
};

const styles= (color: UIColor) => StyleSheet.create({
  HeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: color.Accent
  },
  HeaderText: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: "center",
    color: color.TextAssistant,
    fontFamily: FONT_FAMILY.is_tok_web_bold
  }
});

export default HeaderBarTitleButton;
