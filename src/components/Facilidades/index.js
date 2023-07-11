import styles from './Facilidades.module.css'
import diamante from './x-diamond.svg'
import seta from './arrow-repeat.svg'
import flor from './flower1.svg'

export default function Facilidades() {
    return(
        <section className={styles.facilidades}>
            <h2 className={styles.titulo}>Conheça todas nossas facilidades</h2>
            <div className={styles.container__facilidades}>
                <img src={diamante} alt='diamante' className={styles.item__imagem} />
                <h6 className={styles.item__titulo}>PAGUE PELO PIX</h6>
                <p className={styles.item__texto}>Ganhe 5% OFF em pagamento via PIX</p>
            </div>
            <div className={styles.container__facilidades}>
                <img src={seta} alt='seta' className={styles.item__imagem} />
                <h6 className={styles.item__titulo}>TROCA GRÁTIS</h6>
                <p className={styles.item__texto}>Fique livre para trocar em até 30 dias.</p>
            </div>
            <div className={styles.container__facilidades}>
                <img src={flor} alt='flor' className={styles.item__imagem} />
                <h6 className={styles.item__titulo}>SUSTENTABILIDADE</h6>
                <p className={styles.item__texto}>Moda responsável, que respeita o meio ambiente.</p>
            </div>
        </section>
    )
}