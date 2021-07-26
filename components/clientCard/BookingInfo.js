import styled from 'styled-components'

import getFormattedDate from './utilities/getFormattedDate'

import CalendarIcon from './icons/CalendarIcon'
import ChevronLeft from './icons/ChevronLeft'

const BookingInfo = ({ booking }) => {
  const startDate = getFormattedDate(booking.date_start)
  const endDate = getFormattedDate(booking.date_end)

  return (
    <Section>
      <Heading2>Your booking</Heading2>
      <Card>
        <CardImage>
          <Image src="/images/image.jpg" alt={`${booking.name} image`} />
        </CardImage>
        <CardInfo>
          <Wrapper>
            <CardTitle>{booking.name}</CardTitle>
            <CardLink href="#">
              <CardText>
                <CalendarIcon />
                {startDate} - {endDate}
              </CardText>
              <ChevronLeft />
            </CardLink>
          </Wrapper>
          <CardFooter href="#">
            boats, picnic and more. <br />
            <ColorText>Get experiences</ColorText>
          </CardFooter>
        </CardInfo>
      </Card>
    </Section>
  )
}

export default BookingInfo

const Section = styled.section`
  display: flex;
  flex-direction: column;

  height: 65%;
  gap: var(--spacing-base);
  padding-top: var(--spacing-base);

  font-weight: 300;

  @media (min-width: 1024px) {
    height: 60%;
  }
`

const Heading2 = styled.h2`
  font-size: var(--text-lg);
  font-weight: 600;
`

const Card = styled.article`
  height: 80%;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 12%);
  border-radius: 12px;

  overflow: hidden;

  @media (min-width: 768px) {
    min-width: 20rem;
    max-width: 25rem;
    height: 75%;
  }

  @media (min-width: 1024px) {
    height: 85%;
    max-width: 25%;
  }

  @media (min-width: 1600px) {
    height: 80%;
    max-width: 25rem;
  }
`

const CardImage = styled.div`
  height: 50%;
  border-radius: 12px 12px 0px 0px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 50%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  height: 100%;
`

const CardTitle = styled.p`
  font-size: var(--text-base);
  font-weight: 500;
  line-height: 1.2;

  padding: 1rem;
  padding-bottom: 0;
`

const CardLink = styled.a`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;

  height: 2rem;
  padding: 1rem;

  :hover {
    background: var(--color-hover);
  }
`

const CardText = styled.p`
  flex-grow: 1;
  display: flex;

  gap: 0.5rem;

  font-size: var(--text-sm);
  line-height: 1.2;
`

const CardFooter = styled.a`
  padding-top: 0.875rem;

  font-size: var(--text-base);
  border-top: 1px solid var(--color-border-light);

  padding: 1rem;

  :hover {
    background: var(--color-hover);
  }
`

const ColorText = styled.p`
  color: var(--color-text-details);
  text-decoration: underline;
`
