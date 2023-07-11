import React from "react";
import "./Modal.css";
import { useModalContext } from "contexts/ModalContext";
import check from './check-circle.svg';
import close from './close.svg'
import FormularioModal from "components/FormularioModal";


function Modal({ className }) {

    const { dadosModal, manipulaModal } = useModalContext();

    return (
        <div className={`${className} modal`}>
            <header className="cabecalho__modal">
                <img src={check} alt="Círculo com V" />
                <h3 className="titulo__modal">Confira detalhes sobre o produto</h3>
                <button className='modal__button' onClick={manipulaModal}><img src={close} alt="Ícone de fechar aba" /></button>
            </header>
            <img src={dadosModal.path} alt={dadosModal.alt} className="imagem__modal"/>
            <div className="info__modal">
                <h6 className="modal__titulo">{dadosModal.titulo}</h6>
                <p className="modal__descricao">{dadosModal.descricao}</p>
                <h3 className="modal__preco">{dadosModal.preco}</h3>
                <p className="modal__vendedor">Vendido e entregue por Loja Virtual</p>
                <FormularioModal />
                
            </div>
        </div>
    )
}

export default Modal;