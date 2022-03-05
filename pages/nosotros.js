import Link from "next/link"
import Image from "next/image"
import Layout from "../components/Layout"
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className="contendor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg'  alt="Imagen sobre nosotros"/>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam maiores dolorem aspernatur quibusdam consequatur distinctio nam cumque
            adipisci ratione officia neque dolorum quas temporibus, sunt, hic et! Pariatur, cumque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam maiores dolorem aspernatur quibusdam consequatur distinctio nam cumque adipisci ratione officia neque dolorum quas temporibus, sunt, hic et! Pariatur, cumque.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros

