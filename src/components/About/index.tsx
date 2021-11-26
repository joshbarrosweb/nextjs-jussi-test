import * as S from './styles'

const About = () => (
  <S.Wrapper>
    <div className="left-section">
      <h1>Olá, somos a Jüssi</h1>
      <p>
        A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos
        consolidando o pensamento voltado para produtos e resolução de
        problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
        organizada em 6 especialidades: Product Managamenet, User Experience
        Design, SEO, Tecnologia, Agile e User Behavior Analytics.
      </p>
      <div className="button-wrapper">
        <button>Conheça a Jüssi</button>
      </div>
    </div>
    <div className="right-section">
      <S.Jussi />
    </div>
  </S.Wrapper>
)

export default About
