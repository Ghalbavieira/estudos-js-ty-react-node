import {Post} from "./components/post/post"
import * as style from './assets/global.css'
import {Header} from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar"
import styles from "./App.module.css"


export default function App() {

  return (
    <>
      <Header />
      
      <section className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Ghalba"
            content="Helloo World"
          />
        </main>
      </section>
    
    </>
  )
}

 