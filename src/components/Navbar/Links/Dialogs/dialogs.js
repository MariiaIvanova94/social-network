import styles from './dialogs.module.css';

import Messages from './message';
import User from './user';

function Dialogs () {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__user}>
                <User userName="user1" id="1"/>
                <User userName="user2" id="2"/>
                <User userName="user3" id="3"/>
            </div>

            <Messages message="message1"/>
            <Messages message="message2"/>
            <Messages message="mwssage3"/>
        </div>
    )
}

export default Dialogs;