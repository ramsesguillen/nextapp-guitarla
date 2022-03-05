import Cursos from "../components/Cursos";
import Layout from "../components/Layout";
import Listado from "../components/Listado"
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, cursos, entradas }) {
  return (
    <Layout
      pagina='Inicio'
      guitarra={ guitarras[3]}
    >
      <main className='contador'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado guitarras={ guitarras }/>
      </main>

      <Cursos curso={cursos}/>

      <section className='contenedor'>
        <ListadoBlog entradas={ entradas }/>
      </section>
    </Layout>
  )
}



export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/guitarras?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCursos, respBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ]);


  const [guitarras, cursos, entradas ] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    respBlog.json(),
  ]);

  return {
    props: {
      guitarras,
      cursos,
      entradas
    }
  }
}
