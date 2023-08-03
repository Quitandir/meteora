import Botao from 'components/Botao'
import styles from './CardBombando.module.css'
import { useModalContext } from 'contexts/ModalContext'



export default function CardBombando( { path, alt, titulo, preco, descricao }) {

    const { manipulaModal } = useModalContext()
    

    return (
        <div className={styles.card} name='card-bombando' >
            
            <img src={path} alt={alt} className={styles.card__imagem} />

            <div className={styles.card__info}>
                <h4 className={styles.card__nome}>{titulo}</h4>
                <p className={styles.card__descricao}>{descricao}</p>
                <h4 className={styles.card__preco}>{preco}</h4>
                <Botao funcao={ () => manipulaModal(  path, alt, titulo, preco, descricao ) }>Ver Mais</Botao>

            </div>
        </div>
    )
}