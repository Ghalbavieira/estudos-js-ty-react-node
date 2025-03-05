import {Post} from "./components/post/post"
import * as style from './assets/global.css'
import {Header} from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar"
import styles from "./App.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ghalbaVieira.png",
      name: "Ghalba Vieira",
      role: "Web Developer",
    },
    content: [
      {type: 'paragraph', content: "Fala Galerra"},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto #nlw' },
    ],
    publishAt: new Date('2025-03-04 21:05:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/ghalbaVieira.png",
      name: "isa Vieira",
      role: "Web Developer",
    },
    content: [
      {type: 'paragraph', content: "Fala Galerra"},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto #nlw' },
    ],
    publishAt: new Date('2025-03-04 21:05:00'),
  }
]


export default function App() {

  return (
    <>
      <Header />
      
      <section className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </section>
    
    </>
  )
}

 