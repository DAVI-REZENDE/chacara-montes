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

  '@media (max-width: 425px)': {
    '> img': {
      width: '150px',
    },
  },
})

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  a: {
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  '@media (max-width: 1024px)': {
    position: 'fixed',
    inset: '0',
    backdropFilter: 'blur(14px)',
    background: 'rgba(0,0,0,0.3)',
    flexDirection: 'column',
    justifyContent: 'center',

    a: {
      color: '$white-100',
      fontSize: '$xl',
    },

    button: {
      display: 'none',
    },
  },
})

export const ContainerButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})

export const MenuButton = styled('button', {
  display: 'none',
  fontSize: '$2xl',
  zIndex: '29',

  '@media (max-width: 1024px)': {
    display: 'block',
  },
})

export const ContainerAvatar = styled('button', {
  padding: '$2',
  borderRadius: 4,
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
  background: '$zinc-200',
})

export const Avatar = styled('img', {
  width: 40,
  height: 40,
  borderRadius: '50%',
})
