import styles from './dialogs.module.css'

function Messages (props) {
    return (
        <div className={styles.dialogs__message}>
            <div className={styles.message}>
                {props.message}
            </div>
        </div>
    )
}

export default Messages;