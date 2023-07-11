import React, {useState} from "react";
import './MenuHamburguer.css'
import LinkCabecalho from "components/LinkCabecalho";

const MenuHamburguer = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-menu unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-menu clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-menu unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className='menu__hamburger'>
            <nav>
                <div className={burger_class} onClick={updateMenu}>                    
                </div>
            </nav>

            <div className={menu_class}>
                <ul>
                    <li><LinkCabecalho path={'/nossasLojas'}>Nossas lojas</LinkCabecalho></li> 
                    <li><LinkCabecalho path={'/novidades'}>Novidades</LinkCabecalho></li> 
                    <li><LinkCabecalho path={'/promocoes'}>Promoções</LinkCabecalho></li> 
                </ul>
            </div>
        </div>
    )
}

export default MenuHamburguer