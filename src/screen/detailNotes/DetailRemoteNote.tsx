import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import { useThemeColor } from "../../assets/Theme";
import axios from "axios";
import { Application_Id, REST_API_Key } from "../../../Keys";

export const DetailRemoteNote = ({ route, navigation }: any) => {

  const { transmittedTodoItemRemote } = route.params;

  const [textInputTitle, onChangeTextInputTitle] = useState(transmittedTodoItemRemote.title);
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState(transmittedTodoItemRemote.subTitle);
  const [currentDataTime, setCurrentDataTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    console.log(`date - ${date}.${month}.${year}`);
    setCurrentDataTime(`${date}.${month}.${year}`)
  }, []);


  const updateNoteList = () => {
    setIsLoading(true);
    let data = JSON.stringify({
      "title": textInputTitle,
      "subTitle": textInputSubTitle,
      "createData": currentDataTime
    });

    axios.put(`https://parseapi.back4app.com/classes/noteList/${transmittedTodoItemRemote.objectId}`, `${data}`, {
      headers: {
        "X-Parse-Application-Id": Application_Id,
        "X-Parse-REST-API-Key": REST_API_Key,
        "Content-Type": "application/json"
      }
    }) .then(({ data }) => {
      console.log(data);
      Alert.alert("Complete", "Update note to complete");
    }).catch(err => {
      console.log(err);
    }).finally(() => {
        setIsLoading(false);
    }
    );
  };

  const BackHandler = () => {
    navigation.pop();
  };

  const DeleteHandler = () => {
    // deleteItem(transmittedTodoItem.id);
  };

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

  const colorTheme = useThemeColor();
  const styleComponent = Style(colorTheme);

  return (
    <View style={styleComponent.contrainer}>

      <HeaderBarTitleButton title={"Yours Note"} BackHandler={BackHandler} showDeleteItem={true}
                            DeleteHandler={DeleteHandler} />


      {isLoading && <ActivityIndicator size={"large"} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,}} />}

      <TextInput style={styleComponent.inputTitle}
                 placeholder="Enter your title notes"
                 onChangeText={onChangeTextInputTitle}
                 value={textInputTitle} />

      <TextInput editable
                 multiline={true}
                 numberOfLines={100}
                 style={styleComponent.inputSupTitle}
                 placeholder="Enter your title notes"
                 onChangeText={onChangeTextInputSubTitle}
                 value={textInputSubTitle} />

      <TouchableOpacity style={styleComponent.buttonAdd} onPress={() => {
        if (checkInputData() == true) {
          updateNoteList();
        } else {
          Alert.alert("Unable to update a note", "Fill in all the fields to update a note");
        }
      }}>
        <Text style={styleComponent.textFromButtonAdd}>Update</Text>
      </TouchableOpacity>

    </View>
  );
}
