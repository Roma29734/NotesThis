import React, { useCallback, useEffect, useState } from "react";
import { ToDoItem } from "../../data/model/ToDoItemModel";
import { createTable, getDBConnection, getTodoItems, saveTodoItems } from "../../data/localData/LocalDataBase";
import { FlatList, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Style from "../../viewComponents/Main.basic.style";
import HeaderBarSimpleTitle from "../../viewComponents/HeaderBarSimpleTitle";
import styles from "../../viewComponents/Main.basic.style";
import ItemKeeps from "../../viewComponents/ItemKeeps";


const LocalScreen = ({ navigation }: any) => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");


  const loadDataCallback = useCallback(async () => {
    try {
      const initTodos = [
        { id: 0, value: "go to shop", createData: "29.11.2023" },
        { id: 1, value: "eat at least a one healthy foods", createData: "29.11.2023" },
        { id: 2, value: "Do some exercises", createData: "29.11.2023" },
        { id: 3, value: "go to shop", createData: "29.11.2023" },
        { id: 4, value: "eat at least a one healthy foods", createData: "29.11.2023" },
        { id: 5, value: "Do some exercises", createData: "29.11.2023" },
        { id: 6, value: "go to shop", createData: "29.11.2023" },
        { id: 7, value: "eat at least a one healthy foods", createData: "29.11.2023" },
        { id: 8, value: "Do some exercises", createData: "29.11.2023" }
      ];
      const db = await getDBConnection();
      await createTable(db);
      const storedTodoItems = await getTodoItems(db);
      if (storedTodoItems.length) {
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
  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  return (
    <View style={Style.contrainer}>
      <HeaderBarSimpleTitle title={"NotesThis"} />
      <FlatList
        data={todos}
        numColumns={1}
        style={{height: '100%'}}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate("AddNotes")}>
            <ItemKeeps todo={item} />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default LocalScreen;
