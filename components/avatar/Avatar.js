import styled from 'styled-components'

const Avatar = ({ initials }) => {
  return (
    <Button aria-label="Profile menu">
      <Initials>{initials}</Initials>
    </Button>
  )
}

export default Avatar

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  background-color: var(--color-primary);

  border: transparent;
  border-radius: 50%;

  padding: 0;

  :hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
  };
`

const Initials = styled.span`
  font-size: var(--text-xs);
  color: var(--color-text-inverse);
  font-weight: bold;
`
