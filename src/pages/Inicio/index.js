import Banner from 'components/Banner'
import Bombando from 'components/Bombando'
import Cabecalho from 'components/Cabecalho'
import Categorias from 'components/Categorias'
import Facilidades from 'components/Facilidades'
import Modal from 'components/Modal'
import Newsletter from 'components/Newsletter'
import Rodape from 'components/Rodape'
import { useModalContext } from 'contexts/ModalContext' 

export default function Inicio() {

    const {estadoModal} = useModalContext()

    return (
        <>
            <Cabecalho />
            <Banner />
            <Categorias />
            <Bombando />
            <Modal className={estadoModal} />
            <Facilidades />
            <Newsletter />
            <Rodape />
        </>
    )
} 