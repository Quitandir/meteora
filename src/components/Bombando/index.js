import CardBombando from 'components/CardBombando'
import styles from './Bombando.module.css'
import { useProdutosContext } from 'contexts/ProdutosContext'
import { useEffect } from 'react'
import Modal from 'components/Modal'
import { useModalContext } from 'contexts/ModalContext'


export default function Bombando() {

    const { produtos, getProdutos } = useProdutosContext()
    const {estadoModal} = useModalContext()

    useEffect(() => {
        getProdutos()
    }, [])



    return (
        <section className={styles.bombando}>
            <h2 className={styles.titulo}>Produtos que estão bombando!</h2>
            <div className={styles.bombando__cards}>
            <Modal className={estadoModal} />    
                {produtos.map(card => (
                    <CardBombando
                        key={card.id}
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