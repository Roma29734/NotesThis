import {
  enablePromise,
  openDatabase,
  SQLiteDatabase
} from "react-native-sqlite-storage";
import { ToDoItem } from "../model/ToDoItemModel";

const tableName = "todoData";

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: "todo-data.db", location: "default" });
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        valueTitle TEXT NOT NULL,
        valueSubTitle TEXT NOT NULL,
        createData TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

export const getTodoItems = async (db: SQLiteDatabase): Promise<ToDoItem[]> => {
  try {
    const todoItems: ToDoItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id,valueTitle,valueSubTitle,createData FROM ${tableName}`
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error("Failed to get todoItems !!!");
  }
};

// old INSERT OR REPLACE INTO ${tableName}(rowid, value, createData) values
// new INSERT INTO categories (name) VALUES (?)
export const saveTodoItems = async (db: SQLiteDatabase, todoItems: ToDoItem[]) => {
  const insertQuery =
    `INSERT OR IGNORE INTO ${tableName}(rowid, valueTitle, valueSubTitle, createData) values` +
    todoItems.map(i => `(${null}, '${i.valueTitle}', '${i.valueSubTitle}', '${i.createData}')`).join(",");

  return db.executeSql(insertQuery);
};

export const updateTodoItem = async (db: SQLiteDatabase, id: number, updatedValues: ToDoItem) => {
  const updateQuery = `UPDATE ${tableName} SET valueTitle = ?, valueSubTitle = ?, createData = ? WHERE rowid = ?`;
  const { valueTitle, valueSubTitle, createData } = updatedValues;
  const params = [valueTitle, valueSubTitle, createData, id];
  return db.executeSql(updateQuery, params);
};

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
};
