import { Dimensions, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import React, { useEffect } from "react";
import { RadioButton } from "react-native-paper";
import {getStateThemeAppData, saveStateThemeAppData} from '../../data/localData/MmkvStorageData'


const ThemeSettingsScreen = ({ navigation }: any) => {

  const [checked, setChecked] = React.useState(getStateThemeAppData());

  const BackHandler = () => {
    navigation.pop();
  };

  const DeleteHandler = () => {

  };

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);

  return (
    <SafeAreaView style={styleComponent.container}>
      <HeaderBarTitleButton title={"Set Theme"} BackHandler={BackHandler} showDeleteItem={false}
                            DeleteHandler={DeleteHandler} />

      <View style={styleComponent.mainContainer}>
        <View style={styleComponent.containerViewIcoSub}>

          <Image source={require("../../assets/image/dark_theme_ico_sub.png")} style={styleComponent.imageIcoSub}
                 resizeMode={"center"} />

          <RadioButton
            value="dark"
            status={checked === "dark" ? "checked" : "unchecked"}
            onPress={
              () => {
                setChecked("dark");
                saveStateThemeAppData('dark')
              }
            }
            color={colorTheme.RadioButtonActive}
            uncheckedColor={colorTheme.RadioButtonUnchecked}
          />
        </View>
        <View style={styleComponent.containerViewIcoSub}>

          <Image source={require("../../assets/image/light_theme_ico_sub.png")} style={styleComponent.imageIcoSub}
                 resizeMode={"center"} />
          <RadioButton
            value="light"
            status={checked === "light" ? "checked" : "unchecked"}
            onPress={
            () => {
              setChecked("light");
              saveStateThemeAppData('light')
            }
          }
            color={colorTheme.RadioButtonActive}
            uncheckedColor={colorTheme.RadioButtonUnchecked}
          />
        </View>
        <View style={styleComponent.containerViewIcoSub}>

          <Image source={require("../../assets/image/system_theme_ico_sub.png")} style={styleComponent.imageIcoSub}
                 resizeMode={"center"} />
          <RadioButton
            value="system"
            status={checked === "system" ? "checked" : "unchecked"}
            onPress={
              () => {
                setChecked("system");
                saveStateThemeAppData('system')
              }
            }
            color={colorTheme.RadioButtonActive}
            uncheckedColor={colorTheme.RadioButtonUnchecked}
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
    backgroundColor: color.BackgroundMain, flex: 1
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
