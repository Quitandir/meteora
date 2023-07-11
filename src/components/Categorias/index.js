import CardCategoria from 'components/CardCategoria'
import styles from './Categorias.module.css'
import categorias from './categorias.json'


export default function Categorias() {
    return(
        <section className={styles.categorias}>
            <h2 className={styles.titulo}>Busque por categoria:</h2>            
            <div className={styles.categorias__cards}>
                {categorias.map(card => (
                    <CardCategoria key={card.key} path={card.path} alt={card.alt} titulo={card.titulo} />
                ))}

            </div>
            
        </section>
    )
}