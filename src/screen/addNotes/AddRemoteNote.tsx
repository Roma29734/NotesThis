import Style from "../../viewComponents/Main.basic.style";
import { useThemeColor } from "../../assets/Theme";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import React, { useCallback, useEffect, useState } from "react";
import { Application_Id, REST_API_Key } from "../../../Keys";
import axios from "axios/index";
import { insertRelationToUser } from "../../data/remoteData/RemoteQuery";
import { getStateUserObjectId, getStateUserSessionToken } from "../../data/localData/MmkvStorageData";

export const AddRemoteNoteScreen = ({ navigation }: any) => {
  const [textInputTitle, onChangeTextInputTitle] = useState("");
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState("");
  const [currentData, setCurrentData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

      <HeaderBarTitleButton title={"add Note"} BackHandler={BackHandler} showDeleteItem={false} DeleteHandler={false} />


      {isLoading &&
        <ActivityIndicator size={"large"} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} />}

      <TextInput style={styleComponent.inputTitle}
                 placeholder="Enter your title notes"
                 onChangeText={onChangeTextInputTitle}
                 value={textInputTitle} />

      <View>
        <TextInput editable
                   multiline={true}
                   style={styleComponent.inputSupTitle}
                   placeholder="Enter your title notes"
                   onChangeText={onChangeTextInputSubTitle}
                   value={textInputSubTitle} />

      </View>

      <TouchableOpacity style={styleComponent.buttonAdd} onPress={() => {
        if (checkInputData() == true) {
          insertRelationToNoteList(`${textInputTitle}`, `${textInputSubTitle}`, `${currentData}`);
        } else {
          Alert.alert("Unable to create a note", "Fill in all the fields to create a note");
        }
      }}>
        <Text style={styleComponent.textFromButtonAdd}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
