import Image from 'next/image'
import { Avatar, Container, ContainerAvatar } from './styles'
// import logo from '../../assets/inline-logo.svg'
import { Button } from '../Button'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export function Header() {
  const { data: session } = useSession()

  const router = useRouter()

  return (
    <Container>
      <Image
        src="/assets/inline-logo.svg"
        width={235}
        height={21}
        alt="Chácara Montes"
      />

      <nav>
        <a href="#about">Sobre nos</a>
        <a href="#gallery">Galeria</a>
        <a href="#doubt">Duvidas</a>
        <a href="#local">Local</a>
        <Button variant="tertiary">Agendar evento</Button>
      </nav>

      {session ? (
        <ContainerAvatar onClick={() => router.push('/profile')}>
          <Avatar
            src={session.user?.image ?? ''}
            alt={session.user?.name ?? ''}
          />
          {session.user?.name}
        </ContainerAvatar>
      ) : (
        <Button onClick={() => signIn('google')}>Login</Button>
      )}
    </Container>
  )
}
