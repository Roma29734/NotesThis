import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarTitleButton from "../../viewComponents/HeaderBarTitleButton";
import { deleteTodoItem, getDBConnection, updateTodoItem } from "../../data/localData/LocalDataBase";
import { useThemeColor } from "../../assets/Theme";
import { useTranslation } from "react-i18next";

const DetailNotesScreen = ({ route, navigation }: any) => {

  const { transmittedTodoItem } = route.params;

  const [textInputTitle, onChangeTextInputTitle] = useState(transmittedTodoItem.valueTitle);
  const [textInputSubTitle, onChangeTextInputSubTitle] = useState(transmittedTodoItem.valueSubTitle);
  const [currentData, setCurrentData] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth() + 1
    var year = new Date().getFullYear()
    console.log(`date - ${date}.${month}.${year}`);
    setCurrentData(`${date}.${month}.${year}`)
  }, []);

  const updateTodo = async () => {
    try {
      const db = await getDBConnection();
      const initTodos =
        {
          id: transmittedTodoItem.id,
          valueTitle: textInputTitle,
          valueSubTitle: textInputSubTitle,
          createData: currentData
        }
      ;
      await updateTodoItem(db, transmittedTodoItem.id, initTodos);
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


  const colorTheme = useThemeColor();
  const styleComponent = Style(colorTheme);

  return (
    <View style={styleComponent.contrainer}>

      <HeaderBarTitleButton title={t("detail_note_screen.yours_note")} BackHandler={BackHandler} showDeleteItem={true}
                            DeleteHandler={DeleteHandler} />

      <TextInput style={styleComponent.inputTitle}
                 placeholder={t("detail_note_screen.enter_title")}
                 onChangeText={onChangeTextInputTitle}
                 value={textInputTitle} />


      <View>
        <TextInput editable
                   multiline={true}
                   style={styleComponent.inputSupTitle}
                   placeholder={t("detail_note_screen.enter_sub_title_notes")}
                   onChangeText={onChangeTextInputSubTitle}
                   value={textInputSubTitle} />

      </View>
      <TouchableOpacity style={styleComponent.buttonAdd} onPress={() => {
        if (checkInputData() == true) {
          updateTodo();
        } else {
          Alert.alert(t("alert.note.unable_to_update_note.title"), t("alert.note.unable_to_update_note.message"));
        }
      }}>
        <Text style={styleComponent.textFromButtonAdd}>{t("detail_note_screen.update")}</Text>
      </TouchableOpacity>

    </View>
  );
};
export default DetailNotesScreen;


