import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import CreateTodo from "./CreateTodo";
import AllTodos from "./AllTodos";
import style from "./todo.module.css";

export default function Todo() {
  const [allTodos, setNewTodos] = useState([]);
  const collectNewTodo = (e) => {
    setNewTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuidv4(),
        title: e.title,
        desc: e.desc,
      },
    ]);
  };
  const handelRemoveTodos = (id) => {
    setNewTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <div className={style.containeer}>
      <CreateTodo onCollectNewTodo={collectNewTodo} />
      <AllTodos onTodo={allTodos} handelRemoveTodos={handelRemoveTodos} />
    </div>
  );
}
