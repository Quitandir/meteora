import Botao from 'components/Botao'
import styles from './FormularioModal.module.css'

export default function FormularioModal() {
    return (
        <form className={styles.formulario}>
            <fieldset id='cor' className={styles.form__cor}>
                <legend>Cores:</legend>
                <div className={styles.radio__item}>

                    <input
                        className={styles.input__radio}
                        type="radio"
                        value="azul claro"
                        name='cor'
                    />
                    Azul claro

                </div> <div className={styles.radio__item}>

                    <input
                        className={styles.input__radio}
                        type="radio"
                        value="offwhite"
                        name='cor'
                    />
                    Offwhite

                </div> <div className={styles.radio__item}>

                    <input
                        className={styles.input__radio}
                        type="radio"
                        value="preto"
                        name='cor'
                    />
                    Preto

                </div>
            </fieldset>
            <fieldset id='tamanho' className={styles.form__tamanho}>
                <legend>Tamanho:</legend>
                <div className={styles.radio__item}>

                    <input
                        className={styles.input__radio}
                        type="radio"
                        value="p"
                        name='tamanho'
                    />
                    P

                </div><div className={styles.radio__item}>

                    <input
                        className={styles.input__radio}
                        type="radio"
                        value="m"
                        name='tamanho'
                    />
                    M

                </div><div className={styles.radio__item}>

                    <input
                        className={styles.input__radio}
                        type="radio"
                        value="g"
                        name='tamanho'
                    />
                    G

                </div>
                <div className={styles.radio__item}>

                    <input
                        className={styles.input__radio}
                        type="radio"
                        value="gg"
                        name='tamanho'
                    />
                    GG

                </div>

            </fieldset>
            <Botao>Adicionar à sacola</Botao>
        </form>
    )
}