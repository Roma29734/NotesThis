import Style from "../../viewComponents/Main.basic.style";
import { useThemeColor } from "../../assets/Theme";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import React, { useCallback, useEffect, useState } from "react";
import { Application_Id, REST_API_Key } from "../../../Keys";
import axios from "axios/index";
import { getStateUserObjectId, getStateUserSessionToken } from "../../data/localData/MmkvStorageData";
import { useTranslation } from "react-i18next";

export const AddRemoteNoteScreen = ({ navigation }: any) => {
  const [textInputTitle, onChangeTextInputTitle] = useState("");
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState("");
  const [currentData, setCurrentData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const insertRelationToNoteList = (title: string, subTitle: string, createData: string) => {
    setIsLoading(true);
    let data = JSON.stringify({
      "title": title,
      "subTitle": subTitle,
      "createData": createData
    });

    axios.post("https://parseapi.back4app.com/classes/noteList", `${data}`, {
      headers: {
        "X-Parse-Application-Id": Application_Id,
        "X-Parse-REST-API-Key": REST_API_Key,
        "Content-Type": "application/json"
      }
    }).then(({ data }) => {
      console.log(data);
      UpdateInsertRelationToUser(`${getStateUserObjectId()}`, `${data.objectId}`, `${getStateUserSessionToken()}`);
    }).catch(err => {
      console.log(err);
      setIsLoading(false);
    }).finally(() => {
      }
    );
  };

  const UpdateInsertRelationToUser = (objectId: string, noteListId: string, sessionToken: string) => {
    let data = JSON.stringify({
      "relation": {
        "__op": "AddRelation",
        "objects": [
          {
            "__type": "Relation",
            "className": "noteList",
            "objectId": `${noteListId}`
          }
        ]
      }
    });

    axios.put(`https://parseapi.back4app.com/classes/_User/${objectId}`, `${data}`, {
      headers: {
        "X-Parse-Application-Id": Application_Id,
        "X-Parse-REST-API-Key": REST_API_Key,
        "Content-Type": "application/json",
        "X-Parse-Session-Token": `${sessionToken}`
      }
    }).then(({ data }) => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
        setIsLoading(false);
        navigation.pop();
      }
    );
  };

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentData(`${date}.${month}.${year}`);
  }, []);

  const checkInputData = (): boolean => {
    if (!textInputTitle.trim()) {
      return false;
    } else {
      if (!textInputSubTitle.trim()) {
        return false;
      } else {
        return true;
      }
    }
  };

  const BackHandler = () => {
    navigation.pop();
  };

  const colorTheme = useThemeColor();
  const styleComponent = Style(colorTheme);

  return (
    <View style={styleComponent.contrainer}>

      <HeaderBarTitleButton title={t("add_note_screen.add_note")} BackHandler={BackHandler} showDeleteItem={false} DeleteHandler={false} />


      {isLoading &&
        <ActivityIndicator size={"large"} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} />}

      <TextInput style={styleComponent.inputTitle}
                 placeholder={t("add_note_screen.enter_title")}
                 onChangeText={onChangeTextInputTitle}
                 value={textInputTitle} />

      <View>
        <TextInput editable
                   multiline={true}
                   style={styleComponent.inputSupTitle}
                   placeholder={t("add_note_screen.enter_sub_title_notes")}
                   onChangeText={onChangeTextInputSubTitle}
                   value={textInputSubTitle} />
      </View>

      <TouchableOpacity style={styleComponent.buttonAdd} onPress={() => {
        if (checkInputData() == true) {
          insertRelationToNoteList(`${textInputTitle}`, `${textInputSubTitle}`, `${currentData}`);
        } else {
          Alert.alert(t("alert.note.unable_to_create_note.title"), t("alert.note.unable_to_create_note.message"));
        }
      }}>
        <Text style={styleComponent.textFromButtonAdd}>{t("add_note_screen.add")}</Text>
      </TouchableOpacity>
    </View>
  );
};
