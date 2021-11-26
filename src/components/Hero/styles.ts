import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  min-height: 560px;
  background-color: #03ffa5;

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: 70%;
  }

  @media (max-width: 640px) {
    height: 100%;
  }

  .left-section {
    padding: 5% 0 5% 13%;
    width: 45%;
    height: 100%;

    @media (max-width: 1024px) {
      width: 100%;
      height: 60%;
      padding: 7% 5% 0 5%;
    }

    @media (max-width: 640px) {
      padding: 25% 3% 0 3%;
      margin: 0 auto;
    }

    h1 {
      max-width: 95%;
      text-transform: uppercase;
      text-align: left;
      font-size: 6.35rem;
      color: black;
      font-weight: 500;

      @media (max-width: 1024px) {
        text-align: center;
      }

      @media (max-width: 640px) {
        font-size: 3rem;
      }
    }

    p {
      margin-top: 4%;
      margin-bottom: 4%;
      text-align: left;
      font-size: 1.85rem;
      color: black;

      @media (max-width: 1024px) {
        text-align: center;
      }
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
        height: 48px;
        padding: 1% 2% 1% 2%;
        border: 1px solid black;
        border-radius: 10px;
      }
    }
  }

  .right-section {
    position: relative;
    display: flex;
    gap: 10px;
    padding: 5% 8%;
    width: 55%;
    height: 100%;

    @media (max-width: 1024px) {
      padding: 4% 8%;
      width: 100%;
      margin: 0 auto;
    }

    @media (max-width: 640px) {
      display: none;
    }

    .left-card {
      position: absolute;
      bottom: 20%;
      left: 20%;

      @media (max-width: 1024px) {
        position: relative;
        bottom: 0;
        left: 0;
      }
    }

    .middle-card {
      z-index: 999;
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translate(-50%, -50%);

      @media (max-width: 1024px) {
        z-index: 0;
        position: relative;
        bottom: 0;
        left: 0;
        transform: none;
      }
    }

    .right-card {
      position: absolute;
      bottom: 10%;
      right: 20%;

      @media (max-width: 1024px) {
        position: relative;
        bottom: 0;
        right: 0;
      }
    }
  }
`
