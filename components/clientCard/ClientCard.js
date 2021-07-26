import PropTypes from 'prop-types'
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
      <ContactInfo contact={personalContact} />
    </Container>
  )
}

export default ClientCard

ClientCard.propTypes = {
  client: PropTypes.object,
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100vh - 62px); // 62px === mobile navbar height
  max-height: 100vh;

  margin-top: 62px;
  padding: 1.5rem 2rem 2.5rem 2rem;

  color: var(--color-text);

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 80px); // 80px === desktop navbar height

    margin-top: 80px;
    padding: 2rem 5rem;
  }

  @media (min-width: 1600px) {
    max-width: 1600px;
    margin-inline: auto;
  }
`
