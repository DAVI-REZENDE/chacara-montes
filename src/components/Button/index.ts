import { ComponentProps, ElementType } from 'react'

import { styled } from '@/styles/defaultTheme'

export const Button = styled('button', {
  padding: '$3 $4',
  display: 'flex',
  justifyContent: 'center',
  gap: '$2',
  borderRadius: '4px',
  textTransform: 'uppercase',
  fontWeight: '$bold',
  letterSpacing: '0.125em',
  transition: 'all .2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '&:focus': {
    outline: '$brown 2px solid',
    outlineOffset: '2px',
  },

  variants: {
    variant: {
      primary: {
        background: '$red',
        color: '$white-100',
      },

      secondary: {
        background: '$yellow',
        color: '$white-100',
      },

      tertiary: {
        border: '2px solid $brown',
        color: '$brown',

        '&:hover': {
          background: '$brown',
          color: '$white-100',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
