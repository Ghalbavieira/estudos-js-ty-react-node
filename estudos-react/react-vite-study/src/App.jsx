import {Post}  from "./components/post"
import * as style from './assets/global.css'
import {Header} from "./components/header/header"

export default function App() {

  return (
    <>
      <Header>
        <h1>Hello World</h1>
      </Header>
      <Post 
        author="Ghalba"
        content="Helloo World"
      />
    </>
  )
}

 