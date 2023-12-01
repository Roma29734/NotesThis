
import { Image, StyleSheet, View } from "react-native";
import { COLORS } from "../assets/Theme";
import React from "react";

// @ts-ignore
const ImageDelete = ({visible}) => {
  if (!visible) {
    return (
      <View style={styles.ImageContainerInvisible}>
      </View>
    );
  } else {
    return (
      <View style={styles.ImageContainer}>
        <Image
          source={require("../assets/image/ic_delete_white.png")}
          style={styles.Image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  Image: {
    height: 24,
    width: 24
  }
});

export default ImageDelete;
