import styles from './CardCategoria.module.css'

export default function CardCategoria({path, alt, titulo, filtraPorCategoria}) {
    return(
        <div className={styles.card} onClick={filtraPorCategoria}>
            <img src={path} alt={alt} className={styles.card__imagem} />
            <h4 className={styles.card__nome}>{titulo}</h4>
        </div>
    )
}