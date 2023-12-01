import { Component, useState } from "react";
import { ToDoItem } from "../../data/model/ToDoItemModel";

export default class Test extends Component {
  constructor({ navigation }: any) {
    super(navigation);
  }


  myMethod() {
    const [todos, setTodos] = useState<ToDoItem[]>([]);
  }
}
