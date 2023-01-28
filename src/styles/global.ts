import { globalCss } from './defaultTheme'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    color: '$brown',
    scrollBehavior: 'smooth',
  },

  body: {
    background: '$white-100',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
  },

  input: {
    all: 'unset',
  },
})
