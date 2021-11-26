import * as S from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Partners = () => (
  <S.Wrapper>
    <div className="left-section">
      <h1>Nossas principais lojas VTEX</h1>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
    <div className="right-section">
      <S.PartnersLogo src={'assets/logo-brastemp.svg'} />
      <S.PartnersLogo src={'assets/logo-compracerta.svg'} />
      <S.PartnersLogo src={'assets/logo-consul.svg'} />
      <S.PartnersLogo src={'assets/logo-thebar.svg'} />
    </div>
  </S.Wrapper>
)

export default Partners
