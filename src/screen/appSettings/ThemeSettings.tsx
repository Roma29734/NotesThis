import { Dimensions, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { COLORS } from "../../assets/Theme";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import React from "react";
import { RadioButton } from "react-native-paper";


const ThemeSettingsScreen = ({ navigation }: any) => {

  const [checked, setChecked] = React.useState("first");

  const BackHandler = () => {
    navigation.pop();
  };

  const DeleteHandler = () => {

  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBarTitleButton title={"Set Theme"} BackHandler={BackHandler} showDeleteItem={false}
                            DeleteHandler={DeleteHandler} />

      <View style={styles.mainContainer}>
        <View style={styles.containerViewIcoSub}>

          <Image source={require("../../assets/image/dark_theme_ico_sub.png")} style={styles.imageIcoSub}
                 resizeMode={"center"} />

          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
            color={COLORS.WhiteMain}
          />
        </View>
        <View style={styles.containerViewIcoSub}>

          <Image source={require("../../assets/image/light_theme_ico_sub.png")} style={styles.imageIcoSub}
                 resizeMode={"center"} />
        <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
            color={COLORS.WhiteMain}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({

  mainContainer: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  container: {
    backgroundColor: COLORS.BlackBackground, flex: 1
  },
  imageIcoSub: {
    width: 150,
    height: 200
  },
  containerViewIcoSub: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
});

export default ThemeSettingsScreen;
