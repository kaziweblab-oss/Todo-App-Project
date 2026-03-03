import React from "react";

import { MdDelete } from "react-icons/md";
import style from "./allTodos.module.css";

export default function AllTodos(props) {
  return (
    <div className={style.containeer}>
      {props.onTodo.map((todo, index) => (
        <div key={index} className={style.card}>
          <div className={style.cardData}>
            <h1>Title: {todo.title}</h1>
            <p className={style.desc}>
              Description: <span>{todo.desc}</span>
            </p>
          </div>
          <MdDelete
            onClick={() => {
              props.handelRemoveTodos(todo.id);
            }}
            className={style.icon}
          />
        </div>
      ))}
    </div>
  );
}
