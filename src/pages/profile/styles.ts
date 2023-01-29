import { styled } from '@/styles/defaultTheme'

export const Container = styled('div')

export const Background = styled('div', {
  background: 'url("/assets/background-profile.webp") no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '40vh',
})

export const ProfileInfo = styled('main', {
  margin: '0 auto',
  maxWidth: '450px',
  border: 'solid 1px $brown-200',
  padding: '0 $4',
  borderTop: 0,
  borderBottom: 0,
  marginTop: '$4',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  alignItems: 'center',

  strong: {
    fontFamily: 'Roboto Slab',
    fontSize: '$lg',
  },
})

export const Avatar = styled('img', {
  alignSelf: 'center',
  marginTop: '-50px',
  borderRadius: '50%',
  height: '90px',
  width: '90px',
  border: '4px solid $white-100',
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const OptionButton = styled('button', {
  display: 'flex',
  gap: '$2',
  padding: '$4',

  '&:nth-child(n)': {
    borderBottom: '1px solid $brown-200',
  },
})
