import { Header } from "./components/Header/Header.component";
import { Sidebar } from "./components/Sidebar/Sidebar.component";
import { Post } from "./components/Post/Post.component";

import "./global.css";
import styles from "./App.module.css";
import { PostProps } from "./components/Post/Post.types";

export const App = () => {
  const posts: PostProps[] = [
    {
      id: 1,
      author: {
        avatar_url: "https://github.com/julio-cesar96.png",
        name: "Júlio César",
        role: "Front End Developer at @Strada"
      },
      content: [
          { type: 'paragraph', content: 'E ai pessoal'},
          { type: 'paragraph', content: 'Projetinho novo no meu portifa'},
          { type: 'link', content: 'jane.design/doctorcare' },
      ],
        publishedAt: new Date('2024-10-22 12:00:00'),
    },
    {
      id: 2,
      author: {
        avatar_url: "https://github.com/thayannesandrade.png",
        name: "Thayanne Andrade",
        role: "Front End Developer"
      },
      content: [
          { type: 'paragraph', content: 'E ai pessoal'},
          { type: 'paragraph', content: 'Projetinho novo no meu portifa'},
          { type: 'link', content: 'jane.design/doctorcare' },
      ],
        publishedAt: new Date('2024-10-22 12:00:00'),
    }
  ]
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </>
  );
}

