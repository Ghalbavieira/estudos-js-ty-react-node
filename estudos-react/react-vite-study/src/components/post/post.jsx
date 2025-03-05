import React, { useState } from "react"
import styles from './post.module.css';
import {Comments} from "../comments/comments"
import {Avatar} from "../avatar/avatar"
import { format, formatDistanceToNow} from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'


export function Post({author, content, publishAt})  {
    const [commentText, setCommentText] = useState([])

    const [newCommentTexts, setNewCommentTexts] = useState('')

    const publishedDate = format(publishAt, "d 'de' LLLL 'às' HH:mm 'h'", {
        locale: ptBR,
    });

    const publishedDateRelative = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event){
        event.preventDefault()
        setCommentText([...commentText, newCommentTexts])
        setNewCommentTexts('');
    }

    function handleNewCommentChange(event){
        setNewCommentTexts(event.target.value);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/ghalbaVieira.png"/>
                    <div className={styles.authorInfo}>
                        <h4>{author.name}</h4>
                        <p>{author.role}</p>
                    </div>
                </div>

                <time title={publishedDate} dateTime={publishAt.toISOString()}>{publishedDateRelative}</time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.content}</p>;
                    } else if (line.type === "link") {
                        return <p key={index}><a href="#">{line.content}</a></p>;
                    }
                    return null;
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <h4>Deixe seu Comentário</h4>

                <textarea
                    name="commentText"
                    value={newCommentTexts}
                    placeholder="Deixe seu Comentário"
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.comentList}>
                {commentText.map(comments  => {
                    return (
                        <Comments 
                            content={comments}
                        />
                    )
                })}
            </div>
        </article>
    )

}