import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'


const Header = ({ guitarra }) => {

  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <div>
            <Link href={'/'}>
              <a>
                <Image width={400} height={100} src="/img/logo.svg" alt='Imagen logo' />
              </a>
            </Link>
          </div>
          <nav className={styles.navegacion}>
            <Link href="/">
              <a>Inicio</a>
            </Link>
            <Link href="/nosotros">
              <a>Nosotros</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/tienda">
              <a>Tienda</a>
            </Link>
            <Link href="/carrito">
              <a><Image layout='fixed' width={30} height={25} src="/img/carrito.png" alt='Imagen carrito' /></a>
            </Link>
          </nav>
        </div>

        {
          guitarra  && (
            <div className={ styles.modelo}>
              <h1>Modelo { guitarra.nombre }</h1>
              <p>{ guitarra.descripcion }</p>
              <p className={ styles.precio }>${ guitarra.precio }</p>
              <Link href={`/guitarras/${guitarra.url}`}>
                <a className={ styles.enlace}>Ver Producto</a>
              </Link>
            </div>
          )
        }
      </div>

      {
        router.pathname === '/' &&(
          <div className={styles.guitarra}>
            <Image layout='fixed' width={500} height={1200}  src="/img/header_guitarra.png" alt="Imagen  header guitarra" />
          </div>
        )
      }
    </header>
  )
}

export default Header