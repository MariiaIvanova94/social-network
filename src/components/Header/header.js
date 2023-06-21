import styles from './header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <header className=''>
                <img src="https://img1.freepng.ru/20180426/dxe/kisspng-computer-icons-mind-map-concept-desktop-wallpaper-network-icon-5ae1dd744b3280.216202311524751732308.jpg" alt="" className="header__logo" />
            </header>
        
        </div>
    );
};

export default Header;