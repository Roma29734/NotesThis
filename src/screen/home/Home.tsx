import {FlatList, View} from 'react-native';
import HeaderBar from '../../viewComponents/HeaderBar';
import ItemKeeps from '../../viewComponents/ItemKeeps';
import Style from '../../viewComponents/Main.basic.style';
import React, {useCallback, useEffect, useState} from 'react';
import {
  createTable,
  getTodoItems,
  getDBConnection,
  saveTodoItems,
} from '../../data/localData/LocalDataBase';
import {ToDoItem} from '../../data/model/ToDoItemModel';
import styles from '../../viewComponents/Main.basic.style';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeScreen = ({navigation}: any) => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const loadDataCallback = useCallback(async () => {
    try {
      const initTodos = [
        {id: 0, value: 'go to shop'},
        {id: 1, value: 'eat at least a one healthy foods'},
        {id: 2, value: 'Do some exercises'},
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addTodo = async () => {
    if (!newTodo.trim()) {
      return;
    }
    try {
      const newTodos = [
        ...todos,
        {
          id: todos.length
            ? todos.reduce((acc, cur) => {
                if (cur.id > acc.id) {
                  return cur;
                }
                return acc;
              }).id + 1
            : 0,
          value: newTodo,
        },
      ];
      setTodos(newTodos);
      const db = await getDBConnection();
      await saveTodoItems(db, newTodos);
      setNewTodo('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={Style.contrainer}>
      {}
      <HeaderBar title={'NotesThis'} />
      {}
      <FlatList
        style={styles.contrainer}
        data={todos}
        numColumns={1}
        renderItem={({item}) => <ItemKeeps todo={item} />}
      />
    </View>
  );
};

export default HomeScreen;
