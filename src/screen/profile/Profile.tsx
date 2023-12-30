import { Alert, Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import React, { useEffect, useState } from "react";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";
import AppSettingsItems from "../../viewComponents/AppSettingsItems";
import { clearAppData, getStateUserName, getUserAvatarImage } from "../../data/localData/MmkvStorageData";
import { getPhotoInGallery } from "./PhotoImageLink";
import { deleteTable, getDBConnection } from "../../data/localData/LocalDataBase";
import { useTranslation } from "react-i18next";

const ProfileScreen = ({ navigation }: any) => {

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);
  const [imageAvatarToProfile, setImageAvatarToProfile] = useState(getUserAvatarImage());
  const { t } = useTranslation();

  const SetThemeTouchHandler = () => {
    navigation.navigate("NameThemeSettings");
  };
  const ChangeLanguageTouchHandler = () => {
    navigation.navigate("ChangeLanguage")
  };
  const OutAccountTouchHandler = () => {
    showAlertExitAccount();
  };


  const showAlertExitAccount = () =>
    Alert.alert(
      t("alert.exit_acc.title"),
      t("alert.exit_acc.message"),
      [
        {
          text: t("alert.exit_acc.button_cancel"),
          style: "cancel"
        },
        {
          text: t("alert.exit_acc.button_yes"),
          style: "default",
          onPress: () => {
            setLogOutAccState();
          }
        }
      ],
      {
        cancelable: true
      }
    );

  const setLogOutAccState = async () => {
    clearAppData();
    const db = await getDBConnection();
    await deleteTable(db);
    navigation.replace("LoginAccount");
  };

  const onClickChangeEditProfileIc = () => {
    console.log("onClickHandlerEnable");
    setImageAvatarToProfile(getUserAvatarImage());
  };

  return (
    <SafeAreaView style={styleComponent.container}>
      <HeaderBarSimpleTitle title={t("profile_screen.profile")} />
      <View style={styleComponent.mainContainer}>

        <View style={styleComponent.viewImageContainer}>

          {
            imageAvatarToProfile == null ?
              <Image style={{
                width: 110,
                height: 110,
                borderRadius: 600,
                borderColor: COLORS.BlackMain,
                borderWidth: 6,
                tintColor: colorTheme.TextAssistant
              }}
                     source={
                       require("../../assets/image/ic_no_account.png")
                     }
              />
              :
              <Image style={{
                width: 110,
                height: 110,
                borderRadius: 600,
                backgroundColor: COLORS.WhiteMain,
                borderColor: COLORS.BlackMain,
                borderWidth: 6
              }}
                     source={
                       { uri: `${imageAvatarToProfile}` }
                     }
              />
          }

          <TouchableOpacity style={{
            position: "absolute",
            bottom: 8,
            end: 6
          }} onPress={() => {
            getPhotoInGallery(onClickChangeEditProfileIc);
          }}>
            <Image
              source={require("../../assets/image/ic_edit_profile.png")}
              style={styleComponent.imageEditProfile}
            />
          </TouchableOpacity>
        </View>

        <Text style={styleComponent.textName}>{getStateUserName()}</Text>
      </View>

      <View style={styleComponent.viewCardAppSettings}>

        <Text style={styleComponent.textAppSettings}>{t("profile_screen.app_settings")}</Text>

        <AppSettingsItems nameItem={t("profile_screen.set_theme")} locationImage={require("../../assets/image/ic_theme.png")}
                          TouchHandler={SetThemeTouchHandler} />
        <AppSettingsItems nameItem={t("profile_screen.change_lan")} locationImage={require("../../assets/image/ic_language.png")}
                          TouchHandler={ChangeLanguageTouchHandler} />
        <AppSettingsItems nameItem={t("profile_screen.out_acc")} locationImage={require("../../assets/image/ic_exit_account.png")}
                          TouchHandler={OutAccountTouchHandler} />

      </View>
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get("window");
const styles = (color: UIColor) => StyleSheet.create({

  container: {
    backgroundColor: color.BackgroundMain, flex: 1, marginBottom: 80
  },
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
    tintColor: color.SlideAppSettingsBackground
  },
  textName: {
    textAlign: "center",
    color: color.TextAssistant,
    fontSize: 24
  },
  viewCardAppSettings: {
    backgroundColor: color.SlideAppSettingsBackground,
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
    color: COLORS.WhiteMain
  }
});

export default ProfileScreen;
