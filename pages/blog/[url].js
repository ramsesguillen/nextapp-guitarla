import { useRouter } from 'next/router'
import Image from "next/image"
import Layout from '../../components/Layout';
import { formatearFecha } from '../../helpers';
import styles from '../../styles/Entrada.module.css'


const EntradaBlog = ({  entrada }) => {

  const { contenido, imagen, published_at, titulo } = entrada;


  return (
    <Layout pagina={titulo}>
      <main className='contenedor'>
        <h1 className="heading">{ titulo }</h1>
        <article className={ styles.entrada }>
          {/* {
            ( Array.isArray(imagen ) && !imagen.length ) &&
          } */}
          <Image layout="responsive" width={800} height={600} src={imagen[0]?.url}  alt={`Imagen entrada ${titulo}`}/>
          <div className='contenido'>
            <p className={ styles.fecha}>{ formatearFecha( published_at )}</p>
            <p className={ styles.texto}>{ contenido }</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}


export async function getServerSideProps({ query: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const resp = await fetch(urlBlog);
  const entrada = await resp.json();

  return {
    props: {
      entrada: entrada[0]
    }
  }
}

export default EntradaBlog




