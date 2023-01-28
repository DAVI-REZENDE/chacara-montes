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
    alignItems: 'center',
    gap: '$4',

    a: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  },
})

export const ContainerAvatar = styled('button', {
  padding: '$2',
  borderRadius: '999px',
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  background: 'rgba(0,0,0,0.1)',
})

export const Avatar = styled('img', {
  width: 40,
  height: 40,
  borderRadius: '50%',
})
