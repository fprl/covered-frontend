import styled from 'styled-components'

const ChevronLeft = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </Svg>
  )
}

export default ChevronLeft

const Svg = styled.svg`
  width: 14px;
  height: 14px;

  color: var(--color-bg-gray);
`
