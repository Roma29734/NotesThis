import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import React, { useEffect } from "react";
import { COLORS } from "../../assets/Theme";

const RemoteScreen = ({ navigation }: any) => {

  return (
    <View style={Style.contrainer}>
      <HeaderBarSimpleTitle title={"NotesThis"} />
      <Text>This is remote screen, in visible notes in saved remote</Text>

      <TouchableOpacity style={styles.buttonCreate} onPress={() => navigation.navigate("AddNotes")}>
        <Image
          source={require("../../assets/image/ic_plus_white.png")}
          style={styles.Image}
        />
      </TouchableOpacity>

    </View>
  );
};
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: COLORS.WhiteMain
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
