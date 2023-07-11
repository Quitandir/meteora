import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

ModalContext.displayName = 'Modal';

export default function ModalProvider({ children }) {

    const [estadoModal, setEstadoModal] = useState("");
    const [dadosModal, setDadosModal] = useState({
        key: 0,
        path:'',
        alt:'',
        titulo:'',
        preco:'',
        descricao:''

    });

    return (
        <ModalContext.Provider
            value={{ estadoModal, setEstadoModal, dadosModal, setDadosModal }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export function useModalContext() {

    const { estadoModal, setEstadoModal, dadosModal, setDadosModal } = useContext(ModalContext)

    const manipulaModal = ( path, alt, titulo, preco, descricao ) => {
          
        setDadosModal( {path, alt, titulo, preco, descricao} )
        
        if(estadoModal === ''){
            document.body.style.overflow = 'hidden';
            
            setEstadoModal("show");     
        } else {
            document.body.style.overflow = 'unset';
            setEstadoModal('')
        }

    }
  
    return {
        estadoModal,
        manipulaModal,
        dadosModal,
        setDadosModal

    }
}



