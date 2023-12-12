import { StyleSheet } from "react-native";
import { COLORS, UIColor } from "../assets/Theme";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
//  styles from homeSreen
const styles = (color: UIColor) => StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: color.BackgroundMain,
  },
  loadingAlert: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textMainTitle: {
    textDecorationColor: "#rererr",
    fontSize: 25,
  },
  item: {
    flex: 1,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  inputTitle: {
    borderWidth: 2,
    borderColor: color.CardNote,
    borderRadius: 16,
    marginStart: 16,
    marginEnd: 16,
    marginTop: 24,
    fontSize: 16,
    color: color.TextAssistant,
  },
  inputSupTitle: {
    maxHeight: height - 255,
    marginStart: 16,
    marginEnd: 16,
    marginTop: 24,
    fontSize: 16,
    color: color.TextAssistant,
  },
  buttonAdd: {
    width: width - 32,
    height: 55,
    marginBottom: 16,
    marginStart: 16,
    marginEnd: 16,
    position: "absolute",
    bottom: 0,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.BlackMain,
  },
  textFromButtonAdd: {
    color: COLORS.WhiteMain,
    fontSize: 20,
    width: "100%",
    textAlign: "center",
  },
  buttonCreate: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 150,
    end: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.BlackMain,
  },
  Image: {
    height: 28,
    width: 28,
    alignItems: "center",
  },
  FlatListMain: {
    height: height - 150
  },
  ViewForInputSubTitle: {

  }
});

export default styles;
