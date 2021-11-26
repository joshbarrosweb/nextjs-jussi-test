import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  min-height: 480px;
  padding: 5% 0;
  background-color: #ee0e7d;
  color: #000000;

  .contact-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 40%;
    height: 100%;
    margin: 0 auto;
    padding: 3% 0;
    align-items: center;
    justify-content: center;
    color: white;

    @media (max-width: 1024px) {
      max-width: 75%;
    }

    h1 {
      text-transform: uppercase;
      font-size: 3.1rem;

      @media (max-width: 640px) {
        font-size: 1.8rem;
      }
    }

    p {
      padding: 4% 0 0.5% 0;
      font-size: 1.6rem;

      @media (max-width: 640px) {
        padding: 8% 0 1.5% 0;
        font-size: 1.2rem;
      }
    }

    h2 {
      font-size: 3.1rem;

      @media (max-width: 640px) {
        font-size: 2.2rem;
      }
    }
  }
`
