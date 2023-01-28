import { styled } from '@/styles/defaultTheme'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  border: '1px solid $brown-200',
  borderTop: '0',
  borderBottom: '0',
  padding: '0 $4',
  maxWidth: '340px',
  width: '100%',

  h2: {
    fontFamily: 'Roboto Slab',
  },
})
