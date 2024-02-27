import { Header } from "./components/Header/Header.component";
import { Sidebar } from "./components/Sidebar/Sidebar.component";
import { Post } from "./components/Post/Post.component";

import "./global.css";
import styles from "./App.module.css";

export const App = () => {
  const postAuthor = {
    avatar_url: "https://github.com/julio-cesar96.png",
    name: "Júlio César",
    role: "Front End Developer"
  }
  const postPublishedAt = new Date("2023-09-25T07:22:25Z");
  const content = {
    title: "Projeto novo",
    paragraphs: [
      "Fala rapaziada! Acabei de subir mais um projetinho pro meu portifolio.",
      "É um projeto que eu fiz no Ignite, um módulo de react oferecido pela Rocketseat. #novoprojeto #ignite #rocketseat"
    ]
  }
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {" "}
          <Post author={postAuthor} publishedAt={postPublishedAt} content={{
            title: content.title,
            paragraphs: content.paragraphs
          }}
          />
        </main>
      </div>
    </>
  );
}

