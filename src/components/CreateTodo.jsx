import React, { useState } from "react";

import style from "./createTodos.module.css";

export default function CreateTodo(props) {
  const [newTodo, setNewTodo] = useState({
    title: "",
    desc: "",
  });
  const handelChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    props.onCollectNewTodo(newTodo);
  };
  return (
    <form onSubmit={handelSubmit} className={style.form}>
      <div>
        <label htmlFor="title">Title : </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handelChange}
          className={style.input}
          required
        />
      </div>
      <div>
        <label htmlFor="desc">Description : </label>
        <textarea
          name="desc"
          id="desc"
          onChange={handelChange}
          required
        ></textarea>
      </div>
      <button className={style.btn}>Add</button>
    </form>
  );
}
