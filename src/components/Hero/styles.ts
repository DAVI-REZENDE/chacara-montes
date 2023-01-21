import { styled } from '@/styles/defaultTheme'
import Image from 'next/image'

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  position: 'relative',

  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
  },
})

export const Background = styled(Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const Logo = styled(Image, {
  position: 'absolute',

  top: '50% ',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  zIndex: 10,
})
