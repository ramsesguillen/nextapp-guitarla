import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/Guitarra.module.css'
import Layout from "../../components/Layout";

const Producto = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1)
  const { descripcion, imagen, nombre, precio, id } = guitarra[0];

  const handleSubmit = e => {
    e.preventDefault();

    if ( cantidad < 1 ) alert('Cantidad no validad')

    // Add to cart
    const guitarraSelecionada = {
      id, imagen: imagen.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSelecionada)

  }

  return (
    <Layout
      pagina={`Guitarra ${nombre}`}
    >
      <div className={ styles.guitarra}>
        <Image layout="responsive" width={180} height={350} src={ imagen.url } alt={`Imagen Guitarra ${nombre}`} />
        <div className={ styles.contenido}>
          <h3>{nombre}</h3>
          <p className={ styles.descripcion}>{descripcion}</p>
          <p className={ styles.precio}>${precio}</p>

          <form className={ styles.formulario } onSubmit={ handleSubmit }>
            <label htmlFor="">Cantidad: </label>

            <select
              value={ cantidad }
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>

            <input type="submit"
              value='Agregar al carrito'
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}



export const getServerSideProps = async ({ query: { url } }) => {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const resp = await fetch( urlGuitarra );
  const guitarra = await resp.json();

  return {
    props: {
      guitarra
    }
  }
}

export default Producto