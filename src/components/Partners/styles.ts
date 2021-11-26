import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2% 0;
  max-width: 75%;
  width: 100%;
  height: 120px;
  color: black;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 640px) {
    height: 100%;
    margin: 10% auto;
  }

  .left-section {
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    width: 35%;
    margin: 0 3%;

    @media (max-width: 1024px) {
      justify-content: center;
      width: 100%;
      margin: 0 auto 50px auto;
    }

    h1 {
      @media (max-width: 1024px) {
        text-align: center;
      }
    }

    svg {
      width: 24px;
      height: 24px;

      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  .right-section {
    display: flex;
    justify-content: space-between;
    padding: 0 0 0 4%;
    width: 65%;
    gap: 1px;

    img {
      @media (max-width: 640px) {
        margin: 5% auto;
      }
    }

    @media (max-width: 1024px) {
      flex-wrap: wrap;
      padding: 0;
      width: 100%;
      gap: 5px;
    }
  }
`

export const PartnersLogo = styled.img.attrs((props) => ({
  src: props.src
}))`
  width: 128px;
  height: 24px;
`
