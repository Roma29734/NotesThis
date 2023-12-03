import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../assets/Theme";
import React from "react";

// @ts-ignore
const AppSettingsItems = ({ nameItem, locationImage, TouchHandler } ) => {
  return (
    <TouchableOpacity style={styles.viewContainerAppSettings} onPress={() => {
      // TouchHandler();
    }}>

      <View style={{ flexDirection: "row" }}>
        <Image style={styles.imageAppSettingsIlustrIco} source={locationImage} />

        <Text style={styles.textAppSettingsIlustr}>{nameItem}</Text>
      </View>


      <Image style={styles.imageAppSettingsNextNavigate}
             source={require("../assets/image/ic_arrow_next_navigate.png")} />

    </TouchableOpacity>
  );
}

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({

  viewContainerAppSettings: {
    flexDirection: "row",
    width: width - 32,
    marginStart: 16,
    marginEnd: 16,
    justifyContent: "space-between",
    marginTop: 16
  },
  imageAppSettingsIlustrIco: {
    width: 48,
    height: 48
  },
  textAppSettingsIlustr: {
    fontSize: 16,
    color: COLORS.BlackBackground,
    alignSelf: "center",
    marginStart: 16
  },
  imageAppSettingsNextNavigate: {
    width: 24,
    height: 24,
    alignSelf: "center",
    tintColor: COLORS.BlackBackground
  }
});

export default AppSettingsItems;
