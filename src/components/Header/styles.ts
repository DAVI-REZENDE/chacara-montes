import { styled } from '@/styles/defaultTheme'

export const Container = styled('header', {
  background: '$white-100',
  padding: '24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,

  nav: {
    display: 'flex',
    gap: '8px',

    a: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  },
})
