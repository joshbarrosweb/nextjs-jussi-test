import styled from 'styled-components'

export const Wrapper = styled.main`
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3% 0;
  width: 100%;
  height: 100%;

  @media (max-width: 640px) {
    min-height: 250vh;
  }

  .top-section {
    display: flex;
    flex-direction: row;
    margin: 1% auto;
    max-width: 70%;
    width: 100%;

    @media (max-width: 1024px) {
      max-width: 100%;
      justify-content: center;
      margin: 40px auto 40px auto;
    }

    h1 {
      text-transform: uppercase;
      text-align: left;
      font-weight: 700;
      font-size: 2.6rem;

      span {
        color: #03ffa5;
        letter-spacing: 6px;
        margin-right: 5px;
      }
    }
  }

  .bottom-section {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 75%;
    width: 100%;

    @media (max-width: 1024px) {
      margin-top: 30px;
      width: 90%;
    }

    @media (max-width: 640px) {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
`
