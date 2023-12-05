import React, { useCallback, useEffect, useState } from "react";
import { ToDoItem } from "../../data/model/ToDoItemModel";
import { createTable, getDBConnection, getTodoItems, saveTodoItems } from "../../data/localData/LocalDataBase";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import ItemKeeps from "../../viewComponents/ItemKeeps";
import { COLORS, UIColor, useThemeColor } from "../../assets/Theme";
import { useIsFocused } from "@react-navigation/native";

const LocalScreen = ({ navigation }: any) => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadDataCallback();
  }, [isFocused]);

  const loadDataCallback = useCallback(async () => {
    try {
      const initTodos = [
        { id: 0, valueTitle: "go to shop", createData: "29.11.2023", valueSubTitle: "" },
        { id: 1, valueTitle: "eat at least a one healthy foods", createData: "29.11.2023", valueSubTitle: "" },
        { id: 2, valueTitle: "Do some exercises", createData: "29.11.2023", valueSubTitle: "" }
      ];
      const db = await getDBConnection();
      await createTable(db);
      const storedTodoItems = await getTodoItems(db);
      if (storedTodoItems.length) {
        console.log(storedTodoItems);
        setTodos(storedTodoItems);
      } else {
        await saveTodoItems(db, initTodos);
        // @ts-ignore
        setTodos(initTodos);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const colorTheme = useThemeColor()
  const styleComponent = styles(colorTheme)

  return (
    <View style={styleComponent.contrainer}>
      <HeaderBarSimpleTitle title={"NotesThis"} />
      <FlatList
        data={todos}
        style={styleComponent.FlatListMain}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate("DetailNotes", { transmittedTodoItem: item })}>
            <ItemKeeps todo={item} />
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
    backgroundColor: color.BackgroundMain
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
    height: height - 160
  }
});

export default LocalScreen;
