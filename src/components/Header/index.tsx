import Image from 'next/image'
import {
  Avatar,
  Container,
  ContainerAvatar,
  ContainerButtons,
  MenuButton,
  Nav,
} from './styles'
// import logo from '../../assets/inline-logo.svg'
import { Button } from '../Button'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { List, X } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const { data: session } = useSession()

  const router = useRouter()

  function handleToggleMenu() {
    setMenuIsVisible((oldState) => !oldState)
  }

  return (
    <Container>
      <Image
        src="/assets/inline-logo.svg"
        width={235}
        height={21}
        alt="Chácara Montes"
      />

      {menuIsVisible && (
        <Nav>
          <a onClick={handleToggleMenu} href="#about">
            Sobre nos
          </a>
          <a onClick={handleToggleMenu} href="#gallery">
            Galeria
          </a>
          <a onClick={handleToggleMenu} href="#doubt">
            Duvidas
          </a>
          <a onClick={handleToggleMenu} href="#local">
            Local
          </a>
          <Button variant="tertiary">Agendar evento</Button>
        </Nav>
      )}

      <ContainerButtons>
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

        <MenuButton onClick={handleToggleMenu}>
          {menuIsVisible ? (
            <X weight="bold" color="#FFF" size={32} />
          ) : (
            <List weight="bold" />
          )}
        </MenuButton>
      </ContainerButtons>
    </Container>
  )
}
