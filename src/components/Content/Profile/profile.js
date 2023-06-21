import styles from './profile.module.css';

function Profile () {
    return (
        <div className={styles.profile}>
            <img src="" alt="ups, sorry!" className={styles.avatar}/>
            <p className={styles.userInfo}>user info</p>
        </div>

    )
}

export default Profile;