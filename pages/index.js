import data from '../services/data'

import Navbar from '../components/navbar/Navbar'
import ClientCard from '../components/clientCard/ClientCard'

export default function Home({ client }) {
  const clientInfo = client.client
  const initials = clientInfo.first_name[0] + clientInfo.last_name[0]
  

  return (
    <>
      <Navbar initials={initials} />
      <ClientCard client={client} />
    </>
  )
}

export async function getStaticProps() {
  // In a real scenario I would fetch the data from the /api
  /* const res = await fetch('http://localhost:3000/api/client')
  const client = await res.json() */

  const client = data

  return {
    props: {
      client,
    },
  }
}
