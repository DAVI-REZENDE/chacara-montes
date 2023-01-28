import { styled } from '@/styles/defaultTheme'

export const Input = styled('input', {
  background: '$brown-100',
  borderRadius: '8px',
  padding: '$4',

  '&:focus': {
    outline: '2px solid $brown',
    outlineOffset: 2,
  },
})
