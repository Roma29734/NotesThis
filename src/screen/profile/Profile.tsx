import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import React from "react";
import { COLORS } from "../../assets/Theme";
import AppSettingsItems from "../../viewComponents/AppSettingsItems";

const ProfileScreen = ({ navigation }: any) => {

  const SetThemeTouchHandler = () => {
    navigation.navigate("NameThemeSettings")
  };
  const ChangeLanguageTouchHandler = () => {

  };
  const OutAccountTouchHandler = () => {

  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.BlackBackground, flex: 1 }}>
      <HeaderBarSimpleTitle title={"Profile"} />
      <View style={styles.mainContainer}>

        <View style={styles.viewImageContainer}>
          <View style={{
            width: 110,
            height: 110,
            borderRadius: 600,
            backgroundColor: COLORS.WhiteMain,
            borderColor: COLORS.BlackMain,
            borderWidth: 6
          }}>
          </View>
          <Image
            source={require("../../assets/image/ic_edit_profile.png")}
            style={styles.imageEditProfile}
          />
        </View>

        <Text style={styles.textName}>Your Name </Text>
      </View>

      <View style={styles.viewCardAppSettings}>

        <Text style={styles.textAppSettings}>App Settings</Text>

        <AppSettingsItems nameItem={'Set Theme'} locationImage={require("../../assets/image/ic_theme.png")} TouchHandler={SetThemeTouchHandler} />
        <AppSettingsItems nameItem={'Change Language'} locationImage={require("../../assets/image/ic_language.png")} TouchHandler={ChangeLanguageTouchHandler}/>
        <AppSettingsItems nameItem={'Out Account'} locationImage={require("../../assets/image/ic_exit_account.png")} TouchHandler={OutAccountTouchHandler}/>

      </View>
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({

  mainContainer: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  Image: {
    margin: 8,
    flex: 1,
    alignItems: "center"
  },
  viewImageContainer: {
    width: 120,
    height: 120,
    marginTop: 80,
    flexDirection: "column",
    alignItems: "center"
  },
  imageEditProfile: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: 8,
    end: 6
  },
  textName: {
    textAlign: "center",
    color: COLORS.WhiteMain,
    fontSize: 24
  },
  viewCardAppSettings: {
    backgroundColor: "#7E8A95",
    flex: 1,
    marginTop: 64,
    borderTopEndRadius: 32,
    borderTopStartRadius: 32,
    flexDirection: "column"
  },
  textAppSettings: {
    marginTop: 16,
    marginStart: 24,
    fontSize: 18,
    color: COLORS.BlackBackground
  },
});

export default ProfileScreen;
