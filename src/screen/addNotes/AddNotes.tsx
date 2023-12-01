import React, { useCallback, useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import { ToDoItem } from "../../data/model/ToDoItemModel";
import { createTable, getDBConnection, getTodoItems, saveTodoItems } from "../../data/localData/LocalDataBase";

const AddNotesScreen = ({ navigation }: any) => {

  const [textInputTitle, onChangeTextInputTitle] = useState("");
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState("");

  const BackHandler = () => {
    navigation.pop();
  };

  const addTodo = async () => {
    try {
      const db = await getDBConnection();
      const initTodos = [
        { id: 6, valueTitle: textInputTitle, valueSubTitle: textInputSubTitle, createData: "29.11.2023" }
      ];
      await saveTodoItems(db, initTodos);
      console.log("very good");
    } catch (error) {
      console.log(error);
    }
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

      <HeaderBarTitleButton title={"add Note"} BackHandler={BackHandler} showDeleteItem={false} DeleteHandler={false} />

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
          addTodo();
        } else {
          Alert.alert("Unable to create a note", "Fill in all the fields to create a note");
        }
      }}>
        <Text style={Style.textFromButtonAdd}>Add</Text>
      </TouchableOpacity>

    </View>
  );
};

export default AddNotesScreen;
