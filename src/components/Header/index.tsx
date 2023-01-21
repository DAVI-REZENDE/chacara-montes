import Image from 'next/image'
import { Container } from './styles'
// import logo from '../../assets/inline-logo.svg'
import { Button } from '../Button'

export function Header() {
  return (
    <Container>
      <Image
        src="/assets/inline-logo.svg"
        width={235}
        height={21}
        alt="Chácara Montes"
      />

      <nav>
        <a href="#">Agendar Evento</a>
        <a href="#">Galeria</a>
      </nav>

      <Button>Login</Button>
    </Container>
  )
}
