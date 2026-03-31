import { useDispatch } from "react-redux";
import style from "./card.module.css";
import { toggleTodo } from "../../services/todos/actions/actions";

export default function Card({ todo }) {
  const dispatch = useDispatch();

  const textSlicer = (value, number) => {
    if (value.length > number) {
      return value.slice(0, number) + "...";
    } else {
      return value;
    }
  };

  const handelChange = () => {
    dispatch(toggleTodo(todo.id));
  };
  return (
    <>
      <article className={style.section}>
        <h2 className={style.title}>{textSlicer(todo.title, 15)}</h2>
        {todo.title.length > 15 && (
          <button className={style.btn}>Learn More</button>
        )}
        <div className={style.container}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handelChange}
            className={style.checkbox}
          />
          <span className={style.span}>|</span>
          <div>
            <p className={style.desc}>
              {todo.completed ? "Compleated" : "Uncompleated"}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
