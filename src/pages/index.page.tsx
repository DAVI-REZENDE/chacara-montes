import { Button } from '@/components/Button'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Banner, LocalSection, Main, QuestionsSection } from '@/styles/home'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main>
        <section id="about">
          <h2>Um pouco sobre a chácara</h2>

          <p>
            Lugar com bastante verde ar livre. Piscina com 25m de cumprimento
            por sete de largura tratada com ozônio e sauna. Campo de futebol,
            área de jogo (sinuca, tênis de mesa, mesa de xadrez, dama, truco e
            etc...)
          </p>

          <p>
            Temos acomodação para vinte e sete pessoas, mas muito espaço para
            acomodar muito mais. São sete quartos sendo tres suítes e três com
            ar condicionado.
          </p>

          <p>
            Temos também motor gerador de energia pra uma eventual falta da
            mesma.
          </p>

          <p>
            Dois quiosques, duas churrasqueiras, cozinha completa com fogão
            industrial com seis bocas com forno, micro-ondas, dois freezer, uma
            geladeira grande e outros utensílios.
          </p>
        </section>

        <Banner>
          <div>
            <h2>Lugar de prazer e descanso!</h2>
            <p>Não perca essa oportunidade e reserve suas ferias</p>
            <Button variant="secondary">Fazer reserva agora</Button>
          </div>
        </Banner>

        <Gallery />

        <QuestionsSection id="doubt">
          <h2>Duvidas? Entre em contato com a gente.</h2>
          <Button>Mensagem por whatsapp</Button>
          <Button>Enviar por e-mail</Button>
        </QuestionsSection>

        <LocalSection id="local">
          <div>
            <h2>Onde estamos.</h2>
            <p>Estamos a 45km de Goiânia. Próximo a cidade de Inhumas.</p>
          </div>

          <iframe
            name="oi"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3827.4310223451894!2d-49.55244728513718!3d-16.402921688675523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI0JzEwLjUiUyA0OcKwMzMnMDAuOSJX!5e0!3m2!1spt-BR!2sbr!4v1674931465469!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          />
        </LocalSection>
      </Main>
    </>
  )
}
