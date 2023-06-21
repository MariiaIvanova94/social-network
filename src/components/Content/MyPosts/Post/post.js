import styles from './post.module.css'

function Post (props) {

    return (

        <div className={styles.post}>
            {props.message}
            <button className={styles.post__btn}>Like</button>
        </div>
    )
}

export default Post;