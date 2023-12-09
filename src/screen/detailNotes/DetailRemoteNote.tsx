import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import { useThemeColor } from "../../assets/Theme";

export const DetailRemoteNote = ({ route, navigation }: any) => {

  const { transmittedTodoItemRemote } = route.params;

  const [textInputTitle, onChangeTextInputTitle] = useState(transmittedTodoItemRemote.title);
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState(transmittedTodoItemRemote.subTitle);
  const [currentDataTime, setCurrentDataTime] = useState("");


  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    console.log(`date - ${date}.${month}.${year}`);
    setCurrentDataTime(`${date}.${month}.${year}`)
  }, []);


  const BackHandler = () => {
    navigation.pop();
  };

  const DeleteHandler = () => {
    // deleteItem(transmittedTodoItem.id);
  };


  const colorTheme = useThemeColor();
  const styleComponent = Style(colorTheme);

  return (
    <View style={styleComponent.contrainer}>

      <HeaderBarTitleButton title={"Yours Note"} BackHandler={BackHandler} showDeleteItem={true}
                            DeleteHandler={DeleteHandler} />

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
        // if (checkInputData() == true) {
        //   updateTodo();
        // } else {
        //   Alert.alert("Unable to update a note", "Fill in all the fields to update a note");
        // }
      }}>
        <Text style={styleComponent.textFromButtonAdd}>Update</Text>
      </TouchableOpacity>

    </View>
  );
}
