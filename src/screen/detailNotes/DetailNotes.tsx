import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import { deleteTodoItem, getDBConnection, updateTodoItems } from "../../data/localData/LocalDataBase";

const DetailNotesScreen = ({ route, navigation }: any) => {

  const { transmittedTodoItem } = route.params;

  const [textInputTitle, onChangeTextInputTitle] = useState(transmittedTodoItem.valueTitle);
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState(transmittedTodoItem.valueSubTitle);

  const updateTodo = async () => {
    try {
      const db = await getDBConnection();
      const initTodos = [
        {
          id: transmittedTodoItem.id,
          valueTitle: textInputTitle,
          valueSubTitle: textInputSubTitle,
          createData: "29.11.2023"
        }
      ];
      await updateTodoItems(db, initTodos);
      console.log("very good");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      const db = await getDBConnection();
      await deleteTodoItem(db, id);
    } catch (error) {
      console.error(error);
    }
  };

  const BackHandler = () => {
    navigation.pop();
  };

  const DeleteHandler = () => {
    deleteItem(transmittedTodoItem.id);
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
        if (checkInputData() == true) {
          updateTodo();
        } else {
          Alert.alert("Unable to update a note", "Fill in all the fields to update a note");
        }
      }}>
        <Text style={Style.textFromButtonAdd}>Update</Text>
      </TouchableOpacity>

    </View>
  );

};
export default DetailNotesScreen;
