
import { Image, StyleSheet, View } from "react-native";
import { COLORS, UIColor, useThemeColor } from "../assets/Theme";
import React from "react";

// @ts-ignore
const ImageDelete = ({visible}) => {


  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);

  if (!visible) {
    return (
      <View style={styleComponent.ImageContainerInvisible}>
      </View>
    );
  } else {
    return (
      <View style={styleComponent.ImageContainer}>
        <Image
          source={require("../assets/image/ic_delete_white.png")}
          style={styleComponent.Image}
        />
      </View>
    );
  }
}

const styles = (color: UIColor) => StyleSheet.create({
  ImageContainer: {
    height: 36,
    width: 36,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  ImageContainerInvisible: {
    height: 36,
    width: 36,
    margin: 16,
  },
  Image: {
    height: 24,
    width: 24,
    tintColor: color.TextAssistant,
  }
});

export default ImageDelete;
