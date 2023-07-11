import { Link } from 'react-router-dom';
import styles from './LinkCabecalho.module.css';

export default function LinkCabecalho({children, path}) {
    return (
        <Link to={path} className={styles.linkCabecalho}>
            {children}
        </Link>
    )

}