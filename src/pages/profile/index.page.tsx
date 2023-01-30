import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ClockCounterClockwise, Plus, SignOut } from 'phosphor-react'
import { useEffect } from 'react'
import {
  Actions,
  Avatar,
  Background,
  Container,
  Info,
  OptionButton,
  ProfileInfo,
} from './styles'

export default function Userinfo() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [session])

  return (
    <Container>
      <Background />
      <ProfileInfo>
        <Avatar
          src={session?.user?.image ?? ''}
          alt={session?.user?.name ?? ''}
        />

        <Info>
          <strong>{session?.user?.name ?? ''}</strong>
          <span>{session?.user?.email ?? ''}</span>
        </Info>

        <Actions>
          <OptionButton>
            <Plus weight="bold" />
            Novo agendamento
          </OptionButton>
          <OptionButton>
            <ClockCounterClockwise weight="bold" />
            Historico de agendamentos
          </OptionButton>
          <OptionButton onClick={() => signOut()}>
            <SignOut weight="bold" />
            Sair
          </OptionButton>
        </Actions>
      </ProfileInfo>
    </Container>
  )
}
