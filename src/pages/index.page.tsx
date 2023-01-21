import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Actions, Banner, Main, QuestionsSection } from '@/styles/home'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main>
        <section>
          <h2>Um pouco sobre a chácara</h2>

          <p>
            Lugar com bastante verde ar livre, piscina de 25 metros, campo de
            futebol, area de jogo(sinuca,tenis de mesa,mesa de xadrez,dama,truco
            e etc... Contém dois lagos, duas areas de churrasqueria)
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <Banner>
          <div>
            <h2>Lugar de prazer e descanso!</h2>
            <p>Não perca essa oportunidade e reserve suas ferias</p>
            <Button variant="secondary">Fazer reserva agora</Button>
          </div>
        </Banner>

        <QuestionsSection>
          <Actions>
            <h2>Duvidas? Entre em contato com a gente.</h2>
            <Button>Mensagem por whatsapp</Button>
            <Button>Enviar por e-mail</Button>
          </Actions>

          <Image
            src="/assets/field.png"
            width={343.79}
            height={200}
            alt="Campo de futeboll"
          />
        </QuestionsSection>
      </Main>
    </>
  )
}
