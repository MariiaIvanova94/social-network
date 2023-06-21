import styles from './dialogs.module.css';
import {Link} from 'react-router-dom';

function User (props) {
    return (
        <div className={styles.user}>
            <Link to={"/dialogs/" + props.id}>{props.userName}</Link>
        </div>
    )
}

export default User;