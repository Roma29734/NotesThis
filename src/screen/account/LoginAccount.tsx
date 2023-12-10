import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";


export const LoginAccountScreen = () => {
  const colorTheme = useThemeColor()
  const styleComponent = styles(colorTheme)


  return (
    <SafeAreaView style={styleComponent.mainContainer}>

      <Text style={styleComponent.textLogin}>Login</Text>


      <View style={styleComponent.viewNameInput}></View>

    </SafeAreaView>
  )
}

const { height, width } = Dimensions.get("window");
const styles = (color: UIColor) => StyleSheet.create({
  mainContainer: {
    backgroundColor: color.BackgroundMain,
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center"
  },
  textLogin: {
    fontSize: 24,
    color: color.TextAssistant,
  },
  viewNameInput: {
    width: 200,
    height: 100,
    backgroundColor: color.Accent,
  }
});
