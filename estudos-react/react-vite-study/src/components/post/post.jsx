import React from "react"
import * as styles from "./post.css";

export default function Post(props)  {
   
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/ghalbaVieira.png" 
                        alt="Imagem do avatar" 
                    
                    />
                    <h4>{props.author}</h4>
                    <p>{props.content}</p>
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
        </article>
    )

}