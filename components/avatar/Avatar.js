import styled from 'styled-components'

import { Flex } from '../styled/lib'

/* <Avatar
  image={Screenshot+2021-03-17+at+16.49.32.png&preferredSize=small}
  initials="HC"
  online={false}
  variant="v8cmkjf8R"
  background="var(--Primary, rgb(225, 129, 124))"
  outline={false}
*/

const Avatar = ({ initials }) => {
  return (
    <Container>
      <Initials>{initials}</Initials>
    </Container>
  )
}

export default Avatar

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  background-color: var(--color-primary);

  border-radius: 50%;

  :hover {
    opacity: 0.7;
  }
`

const Initials = styled.span`
  font-size: var(--text-xs);
  color: var(--color-text-inverse);
  font-weight: bold;
`
