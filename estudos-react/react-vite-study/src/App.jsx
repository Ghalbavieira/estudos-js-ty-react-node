import {Post}  from "./components/post"
import * as style from './assets/global.css'
import {Header} from "./components/header/header"
import styles from "./App.module.css"

export default function App() {

  return (
    <>
      <Header />
      
      <section className={styles.wrapper}>
        <aside>
            aside
        </aside>

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

 