import styled from 'styled-components'

import getFormattedPhoneNumber from './utilities/getFormattedPhoneNumber'

const ContactInfo = ({ contact }) => {
  const formattedPhoneNumber = getFormattedPhoneNumber(contact.phone)

  return (
    <Section>
      <Wrapper>
        <Text>
          <Bold>{`${contact.first_name} ${contact.last_name}`}</Bold>, your
          contact at covered
        </Text>
        <SubText>
          {contact.email} <br />
          {formattedPhoneNumber}
        </SubText>
      </Wrapper>
      <Text>
        Contact me on{' '}
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=Hi%20${contact.first_name},%20how%20are%20you?`}
        >
          whatsapp!
        </Link>
      </Text>
    </Section>
  )
}

export default ContactInfo

const Section = styled.section`
  display: flex;
  flex-direction: column;

  gap: var(--spacing-base);
  font-weight: 300;

  padding-top: 24px;
  border-top: 1px solid var(--color-border-light);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Bold = styled.b`
  font-weight: 500;
`

const Text = styled.p`
  font-size: var(--text-base);
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: var(--text-sm);
  }
`

const SubText = styled.p`
  font-size: var(--text-sm);
  line-height: 1.6;
`

const Link = styled.a`
  color: var(--color-text-details);
  text-decoration: underline;
  font-weight: 500;
`
