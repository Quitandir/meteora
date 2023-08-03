import { useEffect, useRef, useState } from 'react';
import styles from './Buscador.module.css'
import { useProdutosContext } from 'contexts/ProdutosContext';

export default function Buscador() {

    const [value, setValue] = useState('');
    const { setProdutos } = useProdutosContext()

    useEffect(() => {
        if (value !== '') {

            fetch(`http://localhost:3000/produtos`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const produtosFiltrados = data.filter(produto => {
                        return ((produto.categoria.toLowerCase() === value.toLowerCase()) || (!value))
                    })

                    setProdutos(produtosFiltrados)
                    
                })
        }
    }, [value]);


    return (
        <form className={styles.buscador}>
            <input
                type='text'
                placeholder='Digite a categoria'
                className={styles.barraBusca}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />

        </form>
    )
}