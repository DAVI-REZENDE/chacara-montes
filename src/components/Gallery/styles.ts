import { styled } from '@/styles/defaultTheme'
import {
  Swiper as SwiperLid,
  SwiperSlide as SwiperSlideLib,
} from 'swiper/react'

export const Container = styled('div', {
  padding: '$8',
  height: '95vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  h2: {
    textAlign: 'center',
    color: '$brown',
    fontFamily: 'Roboto Slab',
    fontSize: '$4xl',
    marginBottom: '$4',
  },
})

export const GalleryCard = styled(SwiperLid, {
  width: 'calc(100vw - 300px)',
  maxWidth: '600px',

  '@media (max-width: 686px)': {
    display: 'none',
  },
})

export const GallerySlide = styled(SwiperLid, {
  display: 'none',
  width: '100%',

  '@media (max-width: 686px)': {
    display: 'flex',
  },
})

export const SwiperSlide = styled(SwiperSlideLib, {
  display: 'flex',
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',

  img: {
    width: '100%',
    // height: '100%',
    height: '500px',
    objectFit: 'cover',
  },
})
