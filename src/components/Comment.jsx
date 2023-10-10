import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'


export function Comment(){
    return(
        <div className={styles.comment}>
            <img className={styles.avatar} src='https://github.com/danielapassos.png' alt=''/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniela Passos</strong>
                            <time title='September 27th, 10:43am' dateTime='2023-09-27 11:43:23'>Around 30 min ago</time>
                        </div>
                        <button title='Delete comment'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        Very well, congrats!
                    </p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp/>
                    Clap <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}