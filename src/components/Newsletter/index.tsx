import * as S from './styles'

const handleSubmit = (event: { preventDefault: () => void }) => {
  event.preventDefault()
  alert('OK')
}

const Newsletter = () => (
  <S.Wrapper>
    <div className="newsletter-wrapper">
      <h1>Receba novidades da nossa área de produtos digitais.</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          name="newsletter-form"
          type="text"
          placeholder="Digite seu email"
        />
        <input name="newsletter-submit" type="submit" value="cadastrar" />
      </form>
    </div>
  </S.Wrapper>
)

export default Newsletter
