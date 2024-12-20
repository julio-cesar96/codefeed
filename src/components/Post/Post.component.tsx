import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from "../Avatar/Avatar.component";
import { Comment } from "../Comment/Comment.component";
import styles from "./Post.module.css";
import { Content, PostProps } from "./Post.types";
import { useState } from 'react';
import { Comment as CommentType } from '../Comment/Comment.types';

export const Post: React.FC<PostProps> = ({ author, publishedAt, content }) => {

  const [comments, setComments] = useState<CommentType[]>([
    { id: 1, content: 'Baite projeto, boa!' }
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  const [nextId, setNextId] = useState(2);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault();

    const newComment: CommentType = {
      id: nextId,
      content: newCommentText
    };

    setComments([...comments, newComment]);
    setNextId(nextId + 1);
    setNewCommentText('');
    
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(idToDelete: number) {
    setComments(prevComponents => prevComponents.filter(comment => comment.id !== idToDelete));
  }


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

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item: Content) => {
          if (item.type === 'paragraph') {
            return <p key={item.id}>{item.content}</p>
          } else if (item.type === 'link') {
            return (
            <p key={item.id}>
              <a href="#">{item.content}</a>
            </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} deleteComment={deleteComment}/>
        })}
      </div>
    </article>
  );
};
