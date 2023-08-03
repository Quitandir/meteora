

import MenuHamburguer from 'components/MenuHamburguer'
import styles from './Cabecalho.module.css'
import logo from './logo.svg'
import LinkCabecalho from 'components/LinkCabecalho'
import Buscador from 'components/Buscador'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <LinkCabecalho to='/'>
                <img src={logo} alt='logo meteora' />
            </LinkCabecalho>
            <div className={styles.links}>

                <LinkCabecalho path={'/'}>Home</LinkCabecalho>
                <LinkCabecalho path={'/nossasLojas'}>Nossas lojas</LinkCabecalho>
                <LinkCabecalho path={'/novidades'}>Novidades</LinkCabecalho>
                <LinkCabecalho path={'/promocoes'}>Promoções</LinkCabecalho>

            </div>
            <Buscador className={styles.buscador}/>
            <MenuHamburguer />


        </header>
    )
}