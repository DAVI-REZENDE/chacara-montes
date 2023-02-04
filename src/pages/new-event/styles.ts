import { styled } from '@/styles/defaultTheme'

export const Contanier = styled('div', {
  background: '$zinc-200',
  width: '100vw',
  height: '100vh',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3',
})

export const ContanierCalendar = styled('div', {
  padding: '$4',
  display: 'grid',
  maxWidth: '560px',
  position: 'relative',
  background: '$white-100',
  borderRadius: '8px',

  '@media (max-width: 460px)': {
    padding: 0,
  },
})
