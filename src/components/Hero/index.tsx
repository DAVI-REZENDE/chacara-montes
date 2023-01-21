import { Background, Container, Logo } from './styles'
// import background from '../../assets/background.png'
// import logo from '../../assets/logo.svg'

export function Hero() {
  return (
    <Container>
      <Background
        src="/assets/background.png"
        width={1280}
        height={720}
        alt="Imagem da chacara"
      />
      <Logo
        src="/assets/logo.svg"
        width={322}
        height={243}
        alt="Chacara Montes"
      />
      {/* <h1>Chacara Montes</h1> */}
    </Container>
  )
}
