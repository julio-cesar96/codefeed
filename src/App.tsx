import { Header } from "./components/Header/Header.component";
import { Sidebar } from "./components/Sidebar/Sidebar.component";
import { Post } from "./components/Post/Post.component";

import "./global.css";
import styles from "./App.module.css";

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {" "}
          <Post />{" "}
          <Post />{" "}
        </main>
      </div>
    </>
  );
}

