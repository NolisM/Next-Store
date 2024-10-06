import Link from "next/link";
import styles from "./Header.module.css"

export const Header = () => {

  return (
    <header className={styles.Header__list}>
      <nav>
        <ul>
          <a className={styles.Items} href="/">
            <li>
              Home
            </li>
          </a>
          <a className={styles.Items} href="/Store">
            <li>
              Store
            </li>
          </a>
          <a className={styles.Items} href="/test">
            <li>
              Test
            </li>
          </a>
        </ul>
      </nav>
    </header>
  )
}