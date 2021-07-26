import PropTypes from 'prop-types'
import styled from 'styled-components'

import Logo from './logo/Logo'
import PhoneIcon from './icons/PhoneIcon'
import Avatar from '../avatar/Avatar'

import { Flex } from '../styled/lib'

const Navbar = ({ initials }) => {
  return (
    <Header>
      <Nav>
        <Flex grow={1}>
          <Link href="#">
            <Logo />
          </Link>
        </Flex>
        <Divider gap={1}>
          <Link
            href="https://www.website.covered.ibizadev.nl/huis-ibiza/?"
            desktop
          >
            Our villas
          </Link>
          <Button>
            <PhoneIcon />
          </Button>
          <Avatar initials={initials} />
        </Divider>
      </Nav>
    </Header>
  )
}

export default Navbar

Navbar.propTypes = {
  initials: PropTypes.string,
}

const Header = styled.header`
  position: absolute;
  top: 0rem;
  z-index: 10;

  width: 100%;
  height: 62px;

  border-bottom: 1px solid var(--color-border-light);
  margin: auto;

  @media (min-width: 1024px) {
    height: 80px;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  @media (min-width: 1024px) {
    padding-inline: 5rem;
    padding-block: 0;
    height: 80px;
  }

  @media (min-width: 1600px) {
    max-width: 1600px;
    margin: auto;
  }
`

const Divider = styled(Flex)`
  display: flex;
  align-items: flex-end;
`

const Link = styled.a`
  display: ${p => (p.desktop ? 'none' : 'block')};

  font-size: var(--text-base);
  margin-right: var(--spacing-base);

  @media (min-width: 1024px) {
    display: ${p => (p.desktop ? 'block' : '')};
  }
`

const Button = styled.button`
  padding: 0;

  background-color: transparent;
  border: transparent;
`
