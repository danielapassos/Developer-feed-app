import styles from './Sidebar.module.css'

export default function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='Cover'/>
            <div className={styles.profile}>
                <strong>Daniela Passos</strong>
                <span>Developer</span>
            </div>
            <footer>
                <a href='#'>
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}