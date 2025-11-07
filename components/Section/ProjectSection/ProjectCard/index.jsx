import gitIcon from "../../../../src/assets/git-icon.png"
import styles from "./style.module.css"

export const ProjectCard = ({ projects }) => {
    return (
        <>
        {projects.map((project, index) => {
                return <li key={index} className={styles.projectItem}>
                    <img src={gitIcon} alt="Icone do GitHub" className={styles.projectImg}/>
                    <h3 className={styles.projectTitle}>{project.name}</h3>
                    <p className={styles.projectText}>{project.termination}</p>
                    <a href={project.url} className={styles.projectAnchor} target="_blank">Sabiba mais</a>
                </li>
        })}
        </>
    )
}
