import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./coment.module.css"


export function Comments() {
    return (
        <div className={styles.Comments}>
            <img
                className={styles.avatar}
                src="https://github.com/ghalbaVieira.png"
                alt="Imagem do avatar"

            />
            <div className={styles.CommentsBox}>
                <div className={styles.CommentsBoxContent}>
                    <header>
                        <h4>Ghalba vieira</h4>
                        <time title=" " dateTime="">cerca de 1h atrás</time>

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
                        <span></span>
                    </button>
                </footer>
            </div>
        </div>
    )
}