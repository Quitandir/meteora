import { createContext, useContext, useState } from "react";

export const ProdutosContext = createContext();

ProdutosContext.displayName = 'Produtos';

export default function ProdutosProvider({ children }) {

    const [categorias, setCategorias] = useState([])
    const [produtos, setProdutos] = useState([])
 

    return (
        <ProdutosContext.Provider
            value={{ categorias, produtos, setCategorias, setProdutos }}
        >
            {children}
        </ProdutosContext.Provider>
    )
}

export function useProdutosContext() {

    const { produtos, categorias, setCategorias, setProdutos } = useContext(ProdutosContext)

    const getCategorias = () => {
        fetch("http://localhost:3000/categorias")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setCategorias(data)
          })    
    }

    const getProdutos = () => {
        fetch("http://localhost:3000/produtos")
        .then(response => {
          return response.json()
        })
        .then(data => {
            setProdutos(data)
        })
    }
  
    return {
        produtos,
        categorias,
        getCategorias,
        getProdutos,
        setCategorias,
        setProdutos

    }
}



