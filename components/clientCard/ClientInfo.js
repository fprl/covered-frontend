import styled from 'styled-components'

const ClientInfo = ({ client }) => {
  return (
    <Section>
      <Heading1>
        Hi <Bold>{`${client.first_name} ${client.last_name}`}</Bold>
      </Heading1>
      <Paragraph>
        You have <ColorText>{client.covered_points}</ColorText> accumulated
        points.
      </Paragraph>
    </Section>
  )
}

export default ClientInfo

const Section = styled.section`
  display: flex;
  flex-direction: column;

  font-weight: 300;
  gap: var(--spacing-xs);
`

const Heading1 = styled.h1`
  font-size: var(--text-xl);
  font-weight: 300;
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: var(--text-2xl);
  }
`

const Bold = styled.b`
  font-weight: 500;
`

const Paragraph = styled.p`
  font-size: var(--text-base);
`

const ColorText = styled.span`
  color: var(--color-text-details);
  font-weight: 500;
`
