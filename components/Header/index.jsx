import styles from "./style.module.css"

export const Header = ({ onScrollToAbout, onScrollToStack, onScrollToProjects }) => {
    return (
        <header className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>Portifólio</h1>
        <nav className={styles.headerNav}>
          <a onClick={onScrollToAbout} className={styles.headerAchor}>Sobre</a>
          <a onClick={onScrollToStack} className={styles.headerAchor}>Slack</a>
          <a onClick={onScrollToProjects} className={styles.headerAchor}>Projetos</a>
        </nav>
        <button onClick={onScrollToProjects} className={styles.headerButton}>Contatos</button>
      </header>
    )
}