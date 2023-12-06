import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, UIColor, useThemeColor } from "../assets/Theme";
import React from "react";


const AppSettingsItems = ({ nameItem, locationImage, TouchHandler }: any ) => {

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);
  return (
    <TouchableOpacity style={styleComponent.viewContainerAppSettings} onPress={() => {
      TouchHandler();
    }}>

      <View style={{ flexDirection: "row" }}>
        <Image style={styleComponent.imageAppSettingsIlustrIco} source={locationImage} />

        <Text style={styleComponent.textAppSettingsIlustr}>{nameItem}</Text>
      </View>


      <Image style={styleComponent.imageAppSettingsNextNavigate}
             source={require("../assets/image/ic_arrow_next_navigate.png")} />

    </TouchableOpacity>
  );
}

const { height, width } = Dimensions.get("window");
const styles= (color: UIColor) => StyleSheet.create({

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
    color: COLORS.WhiteMain,
    alignSelf: "center",
    marginStart: 16
  },
  imageAppSettingsNextNavigate: {
    width: 24,
    height: 24,
    alignSelf: "center",
    tintColor: color.BaseReturnedSimple
  }
});

export default AppSettingsItems;
