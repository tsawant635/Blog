// Styles Import
import styles from "@/styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <a href="#"> <strong>My Blog</strong></a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <div className={styles.searchBar}>
        <form>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
