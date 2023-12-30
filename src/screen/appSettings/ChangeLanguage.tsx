import React, { useEffect, useState } from "react";
import { getLanguageState, saveLanguageState } from "../../data/localData/MmkvStorageData";
import { UIColor, useThemeColor } from "../../assets/Theme";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import { useTranslation } from "react-i18next";
import { RadioButton } from "react-native-paper";
import i18n from "i18next";
import { changeLanguage } from "../../assets/translate/i18n";

export const ChangeLanguageScreen = ({ navigation }: any) => {

  const [checked, setChecked] = useState(getLanguageState());
  const { t } = useTranslation();
  const BackHandler = () => {
    navigation.pop();
  };

  const DeleteHandler = () => {
  };

  const changeLanguageHandler = (language: string) => {
    changeLanguage(language);
  };

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);

  return (
    <SafeAreaView style={styleComponent.container}>
      <HeaderBarTitleButton title={t("profile_screen.change_lan")} BackHandler={BackHandler} showDeleteItem={false}
                            DeleteHandler={DeleteHandler} />

      <Text style={styleComponent.textPodItem}>{t("profile_screen.choose_language")}</Text>

      <View style={styleComponent.containerLanguage}>
        <RadioButton
          value="en"
          status={checked === "en" ? "checked" : "unchecked"}
          onPress={
            () => {
              setChecked("en");
              saveLanguageState("en");
              changeLanguageHandler("en");
            }
          }
          color={colorTheme.RadioButtonActive}
          uncheckedColor={colorTheme.RadioButtonUnchecked}
        />
        <Text style={styleComponent.textItemLanguage}>{t("profile_screen.english")}</Text>
      </View>

      <View style={styleComponent.containerLanguage}>
        <RadioButton
          value="es"
          status={checked === "es" ? "checked" : "unchecked"}
          onPress={
            () => {
              setChecked("es");
              saveLanguageState("es");
              changeLanguageHandler("es");
            }
          }
          color={colorTheme.RadioButtonActive}
          uncheckedColor={colorTheme.RadioButtonUnchecked}
        />
        <Text style={styleComponent.textItemLanguage}>{t("profile_screen.spanish")}</Text>
      </View>

      <View style={styleComponent.containerLanguage}>
        <RadioButton
          value="ru"
          status={checked === "ru" ? "checked" : "unchecked"}
          onPress={
            () => {
              setChecked("ru");
              saveLanguageState("ru");
              changeLanguageHandler("ru");
            }
          }
          color={colorTheme.RadioButtonActive}
          uncheckedColor={colorTheme.RadioButtonUnchecked}
        />
        <Text style={styleComponent.textItemLanguage}>{t("profile_screen.russian")}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = (color: UIColor) => StyleSheet.create({
  container: {
    backgroundColor: color.BackgroundMain, flex: 1
  },
  textPodItem: {
    color: color.TextAssistant,
    fontSize: 24,
    marginStart: 16,
    marginTop: 16
  },
  containerLanguage: {
    // alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
    flexDirection: "row"
  },
  textItemLanguage: {
    color: color.TextAssistant,
    fontSize: 18
  }
});
