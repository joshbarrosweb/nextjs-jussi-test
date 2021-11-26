import * as S from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <S.Wrapper>
    <div className="logo-wrapper">
      <S.Logo />
    </div>

    <div className="blank-wrapper"></div>

    <div className="social-wrapper">
      <a href="#">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  </S.Wrapper>
)

export default Footer
