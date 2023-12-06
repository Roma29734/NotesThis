import { Dimensions, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import React from "react";
import { RadioButton } from "react-native-paper";


const ThemeSettingsScreen = ({ navigation }: any) => {

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);
  const [checked, setChecked] = React.useState("first");

  const BackHandler = () => {
    navigation.pop();
  };

  const DeleteHandler = () => {

  };

  return (
    <SafeAreaView style={styleComponent.container}>
      <HeaderBarTitleButton title={"Set Theme"} BackHandler={BackHandler} showDeleteItem={false}
                            DeleteHandler={DeleteHandler} />

      <View style={styleComponent.mainContainer}>
        <View style={styleComponent.containerViewIcoSub}>

          <Image source={require("../../assets/image/dark_theme_ico_sub.png")} style={styleComponent.imageIcoSub}
                 resizeMode={"center"} />

          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
            color={useThemeColor().RadioButtonActive}
            uncheckedColor={useThemeColor().RadioButtonUnchecked}
          />
        </View>
        <View style={styleComponent.containerViewIcoSub}>

          <Image source={require("../../assets/image/light_theme_ico_sub.png")} style={styleComponent.imageIcoSub}
                 resizeMode={"center"} />
        <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
            color={useThemeColor().RadioButtonActive}
            uncheckedColor={useThemeColor().RadioButtonUnchecked}
          />
        </View>

        <View style={styleComponent.containerViewIcoSub}>

          <Image source={require("../../assets/image/system_theme_ico_sub.png")} style={styleComponent.imageIcoSub}
                 resizeMode={"center"} />
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
            color={useThemeColor().RadioButtonActive}
            uncheckedColor={useThemeColor().RadioButtonUnchecked}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const { height, width } = Dimensions.get("window");
const styles= (color: UIColor) => StyleSheet.create({

  mainContainer: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  container: {
    backgroundColor: color.BackgroundMain,
    flex: 1
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
