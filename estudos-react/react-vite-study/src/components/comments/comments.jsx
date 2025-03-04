import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./coment.module.css"
import {Avatar} from "../avatar/avatar"

export function Comments() {
    return (
        <div className={styles.Comments}>
            <Avatar hasBorder={false} src="https://github.com/ghalbaVieira.png"/>
            <div className={styles.CommentsBox}>
                <div className={styles.CommentsBoxContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <h4>Ghalba vieira</h4>
                            <time title=" " dateTime="">cerca de 1h atrás</time>
                        </div>

                        <button title="deletar">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>
                <footer>
                    <button title="aplaudir">
                        <ThumbsUp size={20}/>
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}