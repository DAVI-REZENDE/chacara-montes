import { styled } from '@/styles/defaultTheme'

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',

  '@media (max-width: 385px)': {
    padding: '$4 $2',
  },
})

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CalendarTitle = styled('span', {
  fontWeight: '$medium',
  textTransform: 'capitalize',

  span: {
    color: '$gray500',
  },
})

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',
  color: '$gray-200',

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,
    borderRadius: '4px',

    svg: {
      width: '$5',
      height: '$5',
    },

    '&:hover': {
      color: '$gray-100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray100',
    },
  },
})

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',

  'thead th': {
    color: '$gray-600',
    fontWeight: '$medium',
    fontSize: '$sm',
  },

  'tbody:before': {
    content: '.',
    lineHeight: '0.75rem',
    display: 'block',
    color: '$gray-800',
  },

  'tbody td': {
    boxSizing: 'border-box',
  },
})

export const CalendarDay = styled('button', {
  all: 'unset',
  width: '100%',
  aspectRatio: '1 / 1',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '8px',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  variants: {
    variant: {
      selected: {
        background: '$yellow',
      },

      normal: {
        background: '$gray-200',

        '&:not(:disabled):hover': {
          background: '$gray-300',
        },

        '&:focus': {
          boxShadow: '0 0 0 2px $colors$gray-300',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'normal',
  },
})
