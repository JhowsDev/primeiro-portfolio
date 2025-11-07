import styles from "./style.module.css"

export const TecnologiesCard = ({ tecnologies }) => {

    return (
    <>
    {tecnologies.map((tecnologi, index) => {
        return  <li key={index} className={styles.tecnologieItem}>
            <img src={tecnologi.img} alt={tecnologi.name} className={styles.tecnologieImg}/>
            <h3 className={styles.tecnologieName}>{tecnologi.name}</h3>
        </li>
    })}
    </>
    )
}