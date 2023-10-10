import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post () {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src='https://github.com/danielapassos.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Daniela Passos</strong>
                        <span>Developer</span>
                    </div>
                </div>
                <time title='September 27th, 11:43am' dateTime='2023-09-27 11:43:23'>Posted 1h ago</time>
            </header>
            <div className={styles.content}>
                <p>
                    <p>Hey guys!</p>
                    <p>I just shared a project on my portfolio.</p>
                    <p>👉🏻 {' '}<a href='https://danizeres.com'>Check it out!</a></p>
                    <p><a href='#'>#newProject</a> {' '} <a href='#'>#developer</a></p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea
                    placeholder='Leave a comment'
                />
                <footer>
                    <button type='submit'>Publish</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}