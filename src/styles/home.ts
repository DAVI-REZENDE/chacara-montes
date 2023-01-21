import { styled } from './defaultTheme'

export const Main = styled('main', {
  width: '100%',
  padding: '$6 0',
  background: '$white-100',

  section: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '$8',

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

export const QuestionsSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  alignItems: 'start',
})
