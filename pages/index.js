import styled from 'styled-components'

export default function Home({ client }) {
  console.log(client)
  return <h1>My page</h1>
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/client')
  const client = await res.json()

  return {
    props: {
      client,
    },
  }
}
