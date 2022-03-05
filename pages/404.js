import Link from 'next/link'
// import Layout from '../components/Layout'
import styles from '../styles/NotFound.module.css'


const NotFound = () => {
  return (
    <>
      <div className={ styles.no_encontrado}>
        <h3 className='heading'>Página no encontrada</h3>
        <Link href={'/'}>
          <a>Volver al Inicio</a>
        </Link>
      </div>
    </>
  )
}

export default NotFound