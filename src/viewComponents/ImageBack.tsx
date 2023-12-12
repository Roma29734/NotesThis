import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { COLORS, UIColor, useThemeColor } from "../assets/Theme";

const ImageBack = ({visible}: any) => {

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
          source={require("../assets/image/arrow_back.png")}
          style={styleComponent.Image}
        />
      </View>
    );
  }
};

const styles= (color: UIColor) => StyleSheet.create({
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
    borderRadius: 12,
    borderWidth: 2,
    borderColor: color.Accent,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  Image: {
    height: 24,
    width: 24,
    tintColor: color.TextAssistant,
  }
});

export default ImageBack;
