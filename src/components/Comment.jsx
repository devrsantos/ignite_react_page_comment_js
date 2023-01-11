import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/devrsantos.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Renan Augusto dos Santos</strong>
                            <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar commentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! </p>
                </div>

                <footer>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </footer>
            </div>
        </div>
    )
}