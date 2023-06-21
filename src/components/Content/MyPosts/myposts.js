import Post from './Post/post';
import styles from './myposts.module.css'

function MyPosts () {

    return (

        <div className={styles.posts}>
            <div className={styles.posts__adding}>
                <h2>My posts</h2>
                <input type="text" className={styles.posts__input}/>
                <button className={styles.posts__btn}>Add post</button>
            </div>
            <div className={styles.posts__saved}>
                <Post message='Hello, world!' />
                <Post message='Hi, world!' />
            </div>
        </div>
    )
}

export default MyPosts;