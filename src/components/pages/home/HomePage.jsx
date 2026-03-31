import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import components here
import Card from "../../../components/card/Card";

//import style here
import style from "./HomePage.module.css";

//import services here
import { fetchApi } from "../../../services/todos/actions/actions";
import { API_LINK } from "../../../services/todos/constants/constants";

export default function HomePage() {
  const { todos, isLoading, error } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi(API_LINK));
  }, [dispatch]);
  return (
    <>
      <section className={style.HeroSection}>
        <h1 className={style.title}>Todos</h1>
        <div className={style.cardSection}>
          {isLoading && (
            <div className={style.container}>
              <p className={style.loading}>loading....</p>
            </div>
          )}
          {error && (
            <div className={style.container}>
              <p>{error}</p>
            </div>
          )}
          {todos &&
            todos.map((todo) => {
              return <Card key={todo.id} todo={todo} />;
            })}
        </div>
      </section>
    </>
  );
}
