import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { COLORS } from "../assets/Theme";

// @ts-ignore
const ImageBack = ({visible}) => {

  if (!visible) {
    return (
      <View style={styles.ImageContainerInvisible}>
      </View>
    );
  } else {
    return (
      <View style={styles.ImageContainer}>
        <Image
          source={require("../assets/image/arrow_back.png")}
          style={styles.Image}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: 36,
    width: 36,
    borderRadius: 12,
    borderWidth: 2,
    margin: 16,
    borderColor: COLORS.WhiteMain,
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
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  Image: {
    height: 24,
    width: 24
  }
});

export default ImageBack;
