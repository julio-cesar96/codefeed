import { Avatar } from "../Avatar/Avatar.component";
import { Comment } from "../Comment/Comment.component";
import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar
            hasBorder
            source="https://github.com/thayannesandrade.png"
          />
          <div className={styles.authorInfo}>
            <strong>Júlio César</strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title="25 de Setembro às 07:22" dateTime="2023-09-25 07:22:25">
          {" "}
          Publicado há 1h{" "}
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala rapaziada! </p>
        <p>
          {" "}
          Acabei de subir mais um projetinho pro meu portifolio. É um projeto
          que eu fiz no Ignite, um módulo de react oferecido pela Rocketseat.
        </p>
        <p>
        <a href="#">julio.com/codefeed</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{" "}
          <a href="#">#ignite</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea 
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
