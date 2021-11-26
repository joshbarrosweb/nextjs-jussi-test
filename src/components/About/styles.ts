import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  min-height: 648px;
  background-color: white;

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: 90vh;
  }

  @media (max-width: 640px) {
    justify-content: space-between;
    min-height: 120vh;
  }

  .left-section {
    padding: 5% 0 5% 16%;
    width: 35%;
    height: 100%;

    @media (max-width: 1024px) {
      width: 70%;
      max-height: 20%;
      padding: 2% 0;
      margin: 75px auto;
    }

    h1 {
      text-transform: uppercase;
      text-align: left;
      font-size: 3.5rem;
      color: black;

      @media (max-width: 1024px) {
        text-align: center;
      }
    }

    p {
      @media (max-width: 1024px) {
        margin-top: 5%;
        margin-bottom: 5%;
        text-align: center;
      }

      margin-top: 15%;
      margin-bottom: 15%;
      text-align: left;
      font-size: 1.75rem;
      color: black;
    }

    .button-wrapper {
      display: flex;
      justify-content: flex-start;

      @media (max-width: 1024px) {
        justify-content: center;
      }

      button {
        background-color: transparent;
        width: 192px;
        height: 42px;
        padding: 1% 2% 1% 2%;
        border: 1px solid black;
        border-radius: 10px;
      }
    }
  }

  .right-section {
    padding: 5% 8%;
    width: 65%;
    height: 100%;

    @media (max-width: 1024px) {
      width: 100%;
      padding: 3% 8%;
    }

    @media (max-width: 640px) {
      height: 30%;
    }
  }
`

export const Jussi = styled.img.attrs({
  src: `assets/image-jussi.png`
})`
  width: 676px;
  height: 520px;
  align-items: center;
  vertical-align: middle;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    height: 16rem;
    width: 70%;
    vertical-align: bottom;
  }
`
