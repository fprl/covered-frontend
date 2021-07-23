import styled from 'styled-components'

import Logo from './logo/Logo'
import PhoneIcon from './PhoneIcon'
import Avatar from '../avatar/Avatar'

import { Flex } from '../styled/lib'

const Navbar = ({ initials }) => {
  return (
    <Nav>
      <Flex grow={1}>
        <Link href="#">
          <Logo />
        </Link>
      </Flex>
      <Divider gap={1}>
        <PhoneIcon />
        <Avatar initials={initials} />
      </Divider>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0rem;
  z-index: 10;

  height: 62px;
  width: 100%;
  padding: 1rem;

  border-bottom: 1px solid var(--color-border-light);

  @media (min-width: 1024px) {
    padding-inline: 5rem;
  }
`

const Divider = styled(Flex)`
  display: flex;
  align-items: center;
`

const Link = styled.a``
