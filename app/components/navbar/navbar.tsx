import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/placeOrder" className={styles.navLink}>Place Order</Link>
        </nav>
    )
}