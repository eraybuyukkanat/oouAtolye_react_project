import styles from'./Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src='/images/logo.jpg' width="100px" height="100px"/>
          <h4>Ses ve Sahne Sanatları Atölyesi</h4>
        </div>
        <div className={styles.elements}>
            <ul>
                <li>ANASAYFA</li>
                <li>DERSLER</li>
                <li>İLETİŞİM</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
