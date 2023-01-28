import { styled } from './defaultTheme'

export const Main = styled('main', {
  width: '100%',
  padding: '$6 0',
  background: '$white-100',

  section: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '$8',
    scrollMargin: '80px',

    h2: {
      fontFamily: 'Roboto Slab',
      fontWeight: '700',
      maxWidth: '300px',
      fontSize: '$4xl',
      lineHeight: '100%',
      marginBottom: '$4',
    },

    p: {
      marginBottom: '$4',
    },
  },
})

export const Banner = styled('div', {
  background: "url('/assets/banner-pool.png') no-repeat",
  backgroundSize: 'cover',
  width: '100%',
  // padding: '$16',
  height: '430px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.2)',
  },

  '> div': {
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    flexDirection: 'column',

    h2: {
      color: '$white-100',
      fontFamily: 'Roboto Slab',
      fontSize: '$4xl',
      maxWidth: '300px',
      textAlign: 'center',
    },

    p: {
      color: '$white-100',
    },
  },
})

export const QuestionsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  height: '430px',

  background: 'url("/assets/field-bg.png") no-repeat',
  backgroundSize: 'cover',
  width: '100%',

  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.2)',
  },

  h2: {
    color: '$white-100',
    fontFamily: 'Roboto Slab',
    fontSize: '$4xl',
    maxWidth: '350px',
    textAlign: 'center',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  alignItems: 'start',
})

export const LocalSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  iframe: {
    border: '0',
    borderRadius: 8,
  },
})
