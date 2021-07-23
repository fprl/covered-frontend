import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {    
    --color-primary: #E1817C;
    --color-bg-gray: #808080;

    --color-text: #22262F;
    --color-text-details: #a9615d;
    --color-text-inverse: white;

    --color-border: #DCDEE0;
    --color-border-light: hsl(0, 0%, 67%, 0.3);
    --color-shadow: hsl(6, 0%, 92%);
    --color-primary-hover: #79a102;

    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 2rem;
    --text-4xl: 2.25rem;

    --spacing-xs: .25rem;
    --spacing-sm: .5rem;
    --spacing-base: 1rem;
    --spacing-m: 1.5rem;
    --spacing-l: 2rem;

    // mobile


    // tablet
    @media (min-width: 768px) {
    }

    // horizontal tablet
    @media (min-width: 1024px) {
    }

    // laptop
    @media (min-width: 1200px) {
    }

    // desktop
    @media (min-width: 1600px) {
    }
  }

  html,
  body {
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	  font-size: 16px;
	  font-weight: 400;
  }

  h1, h2, h3, h4, h5, p { max-width: 70ch; }
`

export default GlobalStyles
