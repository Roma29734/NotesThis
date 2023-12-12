import React, { useCallback, useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import { getDBConnection, saveTodoItems } from "../../data/localData/LocalDataBase";
import { useThemeColor } from "../../assets/Theme";

const AddNotesScreen = ({ navigation }: any) => {

  const [textInputTitle, onChangeTextInputTitle] = useState("");
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState("");
  const [currentData, setCurrentData] = useState("");
  const BackHandler = () => {
    navigation.pop();
  };

  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    console.log(`date - ${date}.${month}.${year}`);
    setCurrentData(`${date}.${month}.${year}`)
  }, []);

  const addTodo = async () => {
    try {
      const db = await getDBConnection();
      const initTodos = [
        { id: 6, valueTitle: textInputTitle, valueSubTitle: textInputSubTitle, createData: currentData }
      ];
      await saveTodoItems(db, initTodos);
      navigation.pop();
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


  const colorTheme = useThemeColor();
  const styleComponent = Style(colorTheme);

  return (
    <View style={styleComponent.contrainer}>

      <HeaderBarTitleButton title={"add Note"} BackHandler={BackHandler} showDeleteItem={false} DeleteHandler={false} />

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
          addTodo();
        } else {
          Alert.alert("Unable to create a note", "Fill in all the fields to create a note");
        }
      }}>
        <Text style={styleComponent.textFromButtonAdd}>Add</Text>
      </TouchableOpacity>

    </View>
  );
};

export default AddNotesScreen;
