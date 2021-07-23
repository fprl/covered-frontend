import styled from 'styled-components'

import ClientInfo from './ClientInfo'
import BookingInfo from './BookingInfo'
import ContactInfo from './ContactInfo'


const ClientCard = ({ client }) => {
  const clientInfo = client.client
  const personalContact = client.personal_contact

  return (
    <Container>
      <ClientInfo client={clientInfo} /> 
      <BookingInfo booking={client.booking} />
      <ContactInfo contact={personalContact}/>
    </Container>
  )
}

export default ClientCard

const Container = styled.main`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 62px);
  max-height: 100vh;
  max-width: 30rem;

  margin-top: 62px;
  margin-inline: auto;
  padding: 24px 32px 40px 32px;

  color: var(--color-text);
`
