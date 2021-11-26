import * as S from './styles'

import { Product } from '../Product'

const Solutions = () => {
  return (
    <S.Wrapper>
      <div className="top-section">
        <h1>
          {/* eslint-disable-next-line */}
          <span>//</span>Nossas Soluções
        </h1>
      </div>
      <div className="bottom-section">
        <Product
          imgUrl={'https://via.placeholder.com/150'}
          title={'Nome do Produto #1'}
          description={'Descrição do produto #1'}
          feature1={'Feature 1'}
          feature2={'Feature 2'}
          feature3={'Feature 3'}
          buttonLabel={'Ver Solução'}
        />
        <Product
          imgUrl={'https://via.placeholder.com/150'}
          title={'Nome do Produto #2'}
          description={'Descrição do produto #1'}
          feature1={'Feature 1'}
          feature2={'Feature 2'}
          feature3={'Feature 3'}
          buttonLabel={'Ver Solução'}
        />
        <Product
          imgUrl={'https://via.placeholder.com/150'}
          title={'Nome do Produto #3'}
          description={'Descrição do produto #1'}
          feature1={'Feature 1'}
          feature2={'Feature 2'}
          feature3={'Feature 3'}
          buttonLabel={'Ver Solução'}
        />
        <Product
          imgUrl={'https://via.placeholder.com/150'}
          title={'Nome do Produto #4'}
          description={'Descrição do produto #1'}
          feature1={'Feature 1'}
          feature2={'Feature 2'}
          feature3={'Feature 3'}
          buttonLabel={'Ver Solução'}
        />
      </div>
    </S.Wrapper>
  )
}

export default Solutions
