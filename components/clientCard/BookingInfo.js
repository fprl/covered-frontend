import styled from 'styled-components'

import getFormattedDate from './utilities/getFormattedDate'

import CalendarIcon from './CalendarIcon'

const BookingInfo = ({ booking }) => {
  const startDate = getFormattedDate(booking.date_start)
  const endDate = getFormattedDate(booking.date_end)

  return (
    <Section>
      <Heading2>Your booking</Heading2>
      <Card>
        <CardImage>
          <Image src="/images/image.jpg" />
        </CardImage>
        <CardInfo>
          <Wrapper>
            <CardTitle>{booking.name}</CardTitle>
            <CardText>
              <CalendarIcon />
              {startDate} - {endDate}
            </CardText>
          </Wrapper>
          <CardFooter>
            boats, picnic and more. <br />
            <Link>Get experiences</Link>
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

  font-weight: 300;
`

const Heading2 = styled.h2`
  font-size: var(--text-lg);
  font-weight: 600;
`

const Card = styled.article`
  height: 80%;

  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  overflow: hidden;
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
  padding: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`

const CardTitle = styled.p`
  font-size: var(--text-base);
  font-weight: 500;
  line-height: 1.2;
`

const CardText = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  font-size: var(--text-sm);
  line-height: 1.2;
`

const CardFooter = styled.div`
  padding-top: 0.875rem;

  font-size: var(--text-base);
  border-top: 1px solid var(--color-border-light);
`

const Link = styled.a`
  color: var(--color-text-details);
  text-decoration: underline;
`
