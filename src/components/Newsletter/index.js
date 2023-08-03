import Botao from 'components/Botao'
import styles from './Newsletter.module.css'
import check from './check-circle.svg';
import close from './close.svg'
import { useState } from 'react';

export default function Newsletter() {

    const [estadoModalNewsLetter, setEstadoModalNewsLetter] = useState("");
    const [emailParaCadastro, setEmailParaCadastro] = useState("");

    const cadastraNewsletter = () => {
        setEstadoModalNewsLetter("show");
        document.body.style.overflow = 'hidden';
        console.log(emailParaCadastro);
        setEmailParaCadastro("")
    }

    const fechaModal = () => {
        setEstadoModalNewsLetter('');
        document.body.style.overflow = 'unset';
        
    }

    return (
        <div className={styles.newsletter}>
            <label htmlFor='newsletter'>
                Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <b>Cadastre-se!</b>
            </label>
            <div className={styles.input}>
                <input 
                    type='email' 
                    name='newsletter' 
                    placeholder='Digite seu email'
                    value={emailParaCadastro} 
                    onChange={(e) => setEmailParaCadastro(e.target.value)}
                />
                <Botao funcao={cadastraNewsletter}>Enviar</Botao>
            </div>

            <div className={`${estadoModalNewsLetter} ${styles.modal__newsletter}`}>
                <header className={styles.cabecalho__modal}>
                    <img src={check} alt="Círculo com V" />
                    <h3 className="titulo__modal">Email cadastrado com sucesso!</h3>
                    <button className='modal__button' onClick={fechaModal}><img src={close} alt="Ícone de fechar aba" /></button>
                </header>
                <div className={styles.modal__texto}>Em breve você receberá novidades exclusivas da Meteora.</div>
            </div>
        </div>
    )
}