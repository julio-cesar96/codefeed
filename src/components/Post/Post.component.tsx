import { Avatar } from "../Avatar/Avatar.component";
import { Comment } from "../Comment/Comment.component";
import styles from "./Post.module.css";
import { PostProps } from "./Post.types";

export const Post: React.FC<PostProps> = ({ author, publishedAt, content}) => {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar
            hasBorder
            source={author.avatar_url}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAt.toDateString()} dateTime={publishedAt.toISOString()}>
          {" "}
          Publicado há {publishedAt.toLocaleString()}
        </time>
      </header>

      <div className={styles.content}>
        <h2>
          {content.title}
        </h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
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
