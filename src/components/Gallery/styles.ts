import { styled } from '@/styles/defaultTheme'
import {
  Swiper as SwiperLid,
  SwiperSlide as SwiperSlideLib,
} from 'swiper/react'

export const Container = styled('section', {
  padding: '$8',
  height: '95vh',

  h2: {
    width: '100%',
    textAlign: 'center',
  },
})

export const Swiper = styled(SwiperLid, {
  width: '500px',
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
