import React from "react"
import styles from './post.module.css';
import {Comments} from "../comments/comments"
import {Avatar} from "../avatar/avatar"

export function Post(props)  {
   
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/ghalbaVieira.png"/>
                    <div className={styles.authorInfo}>
                        <h4>{props.author}</h4>
                        <p>Web Developer</p>
                    </div>
                </div>

                <time title=" " dateTime="">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galerra </p>
                <p>Acabei de subir mais um projeto no meu portifolio</p>
                <p>
                    <a> jane.design/doctorcare</a>
                </p>
                <p>
                    <a>#novoprojeto</a> 
                    <a>#nlw</a> 
                </p>
            </div>

            <form className={styles.comentForm}>
                <h4>Deixe seu Comentário</h4>
                <textarea placeholder="Deixe seu Comentário"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.comentList}>
                <Comments/>
                <Comments/>
                <Comments/>
            </div>
        </article>
    )

}