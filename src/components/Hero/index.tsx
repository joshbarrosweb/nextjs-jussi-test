import * as S from './styles'

import { Card } from '../Card'

const Hero = () => (
  <S.Wrapper>
    <div className="left-section">
      <h1>Criamos lojas que vendem mais.</h1>
      <p>
        A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
        Precisa criar sua loja ou migrar de plataforma?
      </p>
      <div className="button-wrapper">
        <button>Veja nossas soluções</button>
      </div>
    </div>
    <div className="right-section">
      <div className="left-card">
        <Card imgUrl={'/assets/fridge.png'} buttonLabel={'Mais Detalhes'} />
      </div>

      <div className="middle-card">
        <Card imgUrl={'/assets/mixer.png'} buttonLabel={'Comprar em 12x'} />
      </div>

      <div className="right-card">
        <Card
          imgUrl={'/assets/bottle.png'}
          buttonLabel={'Adicionar a Sacola'}
        />
      </div>
    </div>
  </S.Wrapper>
)

export default Hero
