// import style Here
import { Helmet } from "react-helmet-async";
import style from "./App.module.css";

// import pages and Components Here
import Index from "./Routes/Index";

function App() {
  return (
    <>
      <Helmet>
        <title>KWL Todo App Project</title>
      </Helmet>
      <section className={style.containeer}>
        <section>
          <Index />
        </section>
      </section>
    </>
  );
}

export default App;
