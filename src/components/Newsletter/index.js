import Botao from 'components/Botao'
import styles from './Newsletter.module.css'

export default function Newsletter() {
    return(
        <div className={styles.newsletter}>
            <label for='newsletter'>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <b>Cadastre-se!</b>
            </label>
            <div className={styles.input}>
                <input type='email' name='newsletter' placeholder='Digite seu email'/>
                <Botao>Enviar</Botao>
            </div>
        </div>
    )
}