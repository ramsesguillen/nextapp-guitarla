
import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog";


const Blog = ({ entradas }) => {

  return (
    <Layout
      pagina='Blog Virtual'
    >
      <main className="contenedor">
        <ListadoBlog entradas={ entradas }/>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  const resp = await fetch(url);
  const entradas = await resp.json();


  return {
    props: {
      entradas
    }
  }
}

export default Blog

