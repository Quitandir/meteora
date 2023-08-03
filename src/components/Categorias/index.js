import CardCategoria from 'components/CardCategoria'
import styles from './Categorias.module.css'

import { useEffect } from 'react'
import { useProdutosContext } from 'contexts/ProdutosContext'



export default function Categorias() {

  const { categorias, getCategorias, setProdutos, getProdutos } = useProdutosContext()

  useEffect(() => {
    getCategorias()
  }, [])


  const filtraPorCategoria = (categoria) => {

    if (categoria !== 'tudo') {

      fetch("http://localhost:3000/produtos")
        .then(response => {
          return response.json()
        })
        .then(data => {
          const produtosFiltrados = data.filter(produto => {
          return ((produto.categoria === categoria) || (!categoria))
      })

      setProdutos(produtosFiltrados)
        })     

    } else {
      getProdutos()
    }

  }

  return (
    <section className={styles.categorias}>
      <h2 className={styles.titulo}>Busque por categoria:</h2>
      <div className={styles.categorias__cards}>
        {categorias.map(categoria => (
          <CardCategoria
            key={categoria.id}
            path={categoria.path}
            alt={categoria.alt}
            titulo={categoria.titulo}
            filtraPorCategoria={() => filtraPorCategoria(categoria.titulo)}
          />
        ))}

      </div>

    </section>
  )
}