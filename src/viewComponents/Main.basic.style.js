import { StyleSheet } from "react-native";
import { COLORS } from "../assets/Theme";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
//  styles from homeSreen
const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: COLORS.WhiteMain,
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
    borderColor: COLORS.BlackMain,
    borderRadius: 16,
    marginStart: 16,
    marginEnd: 16,
    marginTop: 24,
    fontSize: 16,
    color: COLORS.BlackMain,
  },
  inputSupTitle: {
    maxHeight: width - 55 - 30,
    borderWidth: 2,
    borderColor: COLORS.BlackMain,
    borderRadius: 16,
    marginStart: 16,
    marginEnd: 16,
    marginTop: 24,
    fontSize: 16,
    color: COLORS.BlackMain,
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
    backgroundColor: "#000000",
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
    width: "100%",
    alignItems: "center",
  },
  FlatListMain: {
    height: height - 150
  }
});

export default styles;
