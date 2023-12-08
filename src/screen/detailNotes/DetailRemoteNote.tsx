import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";

export const DetailRemoteNote = ({ route, navigation }: any) => {

  const { transmittedTodoItem } = route.params;

  const [textInputTitle, onChangeTextInputTitle] = useState(transmittedTodoItem.valueTitle);
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState(transmittedTodoItem.valueSubTitle);
  const [currentData, setCurrentData] = useState("");


  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    console.log(`date - ${date}.${month}.${year}`);
    setCurrentData(`${date}.${month}.${year}`)
  }, []);


  const BackHandler = () => {
    navigation.pop();
  };

  const DeleteHandler = () => {
    // deleteItem(transmittedTodoItem.id);
  };

  return (
    <View style={Style.contrainer}>

      <HeaderBarTitleButton title={"Yours Note"} BackHandler={BackHandler} showDeleteItem={true}
                            DeleteHandler={DeleteHandler} />

      <TextInput style={Style.inputTitle}
                 placeholder="Enter your title notes"
                 onChangeText={onChangeTextInputTitle}
                 value={textInputTitle} />

      <TextInput editable
                 multiline={true}
                 numberOfLines={100}
                 style={Style.inputSupTitle}
                 placeholder="Enter your title notes"
                 onChangeText={onChangeTextInputSubTitle}
                 value={textInputSubTitle} />

      <TouchableOpacity style={Style.buttonAdd} onPress={() => {
        // if (checkInputData() == true) {
        //   updateTodo();
        // } else {
        //   Alert.alert("Unable to update a note", "Fill in all the fields to update a note");
        // }
      }}>
        <Text style={Style.textFromButtonAdd}>Update</Text>
      </TouchableOpacity>

    </View>
  );

}
