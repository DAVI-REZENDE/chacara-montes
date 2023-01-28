import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, Form } from './styles'
import { api } from '@/lib/api'

const loginDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type LoginData = z.infer<typeof loginDataSchema>

export default function Login() {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginDataSchema),
  })

  async function handleLogin(data: LoginData) {
    const response = await api.get('/login', {
      data,
    })
    console.log(response)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <h2>Login</h2>
        <Input {...register('email')} placeholder="Digite seu  e-mail" />
        <Input {...register('password')} placeholder="Digite sua senha" />
        <a href="#">Esqueci a senha</a>
        <Button type="submit">Entrar</Button>
        <Button type="button" variant="tertiary">
          Entrar com o Google
        </Button>

        <span>
          Ainda não tem uma conta? <a href="#">Clique aqui para criar</a>
        </span>
      </Form>
    </Container>
  )
}
