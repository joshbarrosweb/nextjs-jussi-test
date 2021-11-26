import * as S from './styles'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Partners from '../../components/Partners'
import Solutions from '../../components/Solutions'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const Main = () => (
  <S.Wrapper>
    <Header />
    <Hero />
    <Partners />
    <Solutions />
    <About />
    <Contact />
    <Newsletter />
    <Footer />
  </S.Wrapper>
)

export default Main
