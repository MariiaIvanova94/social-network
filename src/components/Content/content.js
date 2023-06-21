import MyPosts from './MyPosts/myposts';
import Profile from './Profile/profile';
import styles from './content.module.css'

function Content () {
    return (
        <main className={styles.main__content}>
            <div className={styles.main__content_item}>
                <Profile />
                <MyPosts />
            </div>
        </main>
    )
}

export default Content;