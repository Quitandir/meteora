import styles from './Botao.module.css'

export default function Botao({children, funcao}) {
    return(
        <button onClick={funcao} className={styles.botao}>{children}</button>
    )
}