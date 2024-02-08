
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from "./Comment.module.css";
import { Avatar } from '../Avatar/Avatar.component';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} source="https://github.com/julio-cesar96.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Júlio César</strong>
              <time
                title="25 de Setembro às 07:22"
                dateTime="2023-09-25 07:22:25"
              >
                {" "}
                Cerca de 1h atrás{" "}
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={24} />
            </button>
          </header>
          <p>Deu aula mano, boa!</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Curtir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
};
