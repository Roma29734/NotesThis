import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import React, { useEffect } from "react";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";

const RemoteScreen = ({ navigation }: any) => {

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);

  return (
    <View style={styleComponent.contrainer}>
      <HeaderBarSimpleTitle title={"NotesThis"} />
      <Text>This is remote screen, in visible notes in saved remote</Text>

      <TouchableOpacity style={styleComponent.buttonCreate} onPress={() => navigation.navigate("AddNotes")}>
        <Image
          source={require("../../assets/image/ic_plus_white.png")}
          style={styleComponent.Image}
        />
      </TouchableOpacity>

    </View>
  );
};
const { height, width } = Dimensions.get("window");
const styles = (color: UIColor) => StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: color.BackgroundMain
  },
  buttonCreate: {
    width: 48,
    height: 48,
    position: "absolute",
    bottom: 32,
    end: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.BlackMain
  },
  Image: {
    margin: 8,
    flex: 1,
    alignItems: "center"
  },
  FlatListMain: {
    height: height - 160
  }
});
export default RemoteScreen;
