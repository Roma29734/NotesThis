import React, { useCallback, useEffect, useState } from "react";
import { ToDoItem } from "../../data/model/ToDoItemModel";
import { createTable, getDBConnection, getTodoItems, saveTodoItems } from "../../data/localData/LocalDataBase";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet, Text,
  TouchableOpacity,
  View
} from "react-native";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import ItemKeeps from "../../viewComponents/ItemKeeps";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";
import { useIsFocused } from "@react-navigation/native";
import itemKeeps from "../../viewComponents/ItemKeeps";

const LocalScreen = ({ navigation }: any) => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [visibleIlustrToDo, setVisibleIlustrToDo] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadDataCallback();
  }, [isFocused]);

  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      const storedTodoItems = await getTodoItems(db);
      if (storedTodoItems.length) {
        setVisibleIlustrToDo(false);
        setTodos(storedTodoItems);
      } else {
        setVisibleIlustrToDo(true);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const colorTheme = useThemeColor();
  const styleComponent = styles(colorTheme);

  return (
    <View style={styleComponent.contrainer}>
      <HeaderBarSimpleTitle title={"Local Notes"} />


      {visibleIlustrToDo
        && <View
          style={{
            position: "absolute",
            bottom: 0,
            top: 0,
            start: 0,
            end: 0,
            justifyContent: "center", alignItems: "center"
          }}
        >

          <Image source={require("../../assets/image/add_note_ilustr_ico.png")}
                 style={{ width: 100, height: 100, tintColor: colorTheme.TextAssistant }} />

          <Text style={{color: colorTheme.TextAssistant}}>Create the first note, click on the + button</Text>

        </View>

      }

      <FlatList
        data={todos}
        style={styleComponent.FlatListMain}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate("DetailNotes", { transmittedTodoItem: item })}>
            <ItemKeeps valueTitle={item.valueTitle} createData={item.createData} />
          </TouchableOpacity>
        }
      />
      <TouchableOpacity style={styleComponent.buttonCreate} onPress={() => navigation.navigate("AddNotes")}>
        <Image
          source={require("../../assets/image/ic_plus_white.png")}
          style={styleComponent.Image}
        />
      </TouchableOpacity>
    </View>
  );
};

const { height, width } = Dimensions.get("window");
const styles = (color: UIColor) => StyleSheet.create({
  contrainer: {
    backgroundColor: color.BackgroundMain,
    marginBottom: 80,
    flex: 1,
  },
  buttonCreate: {
    width: 48,
    height: 48,
    position: "absolute",
    bottom: 32,
    end: 16,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.BlackMain
  },
  Image: {
    margin: 8,
    flex: 1,
    alignItems: "center"
  },
  FlatListMain: {
    height: height
  }
});

export default LocalScreen;
