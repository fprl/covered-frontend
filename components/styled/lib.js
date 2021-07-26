import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${p => p.dir ? 'column' : 'row'};

  flex-basis: ${p => p.basis ? `${p.basis}%` : ''};
  flex-grow: ${p => p.grow};
  flex-wrap: wrap;

  gap: ${p => p.gap ? p.gap + 'rem' : null};

  @media (min-width: 768px) {
  flex-wrap: nowrap;
  }
`

export const Grid = styled.div`
  display: grid;
  min-height: 2rem;
`

export const Heading1 = styled.h1`
  font-size: var(--text-2xl);
  font-weight: lighter;
  line-height: 1.2;
`

export const Button = styled.button`
  background-color: var(--color-primary);
  color: white;

  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;

  text-align: center;
  cursor: pointer;

  transition: all 0.2s;

  :hover {
    background-color: var(--color-primary-hover);
  }
`
