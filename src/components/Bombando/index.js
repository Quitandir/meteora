import CardBombando from 'components/CardBombando'
import styles from './Bombando.module.css'
import bombando from './bombando.json'

export default function Bombando() {
    return (
        <section className={styles.bombando}>
            <h2 className={styles.titulo}>Produtos que estão bombando!</h2>
            <div className={styles.bombando__cards}>
            {bombando.map(card => (
                    <CardBombando 
                        key={card.key} 
                        path={card.path} 
                        alt={card.alt} 
                        titulo={card.titulo} 
                        descricao={card.descricao} 
                        preco={card.preco} 
                    />
                ))}
            </div>
        </section>
    )
}