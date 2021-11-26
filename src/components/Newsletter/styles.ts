import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  min-height: 480px;
  padding: 5% 0;
  background-color: #000000;
  color: white;

  .newsletter-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 35%;
    height: 100%;
    margin: 0 auto;
    padding: 3% 0;
    align-items: center;
    justify-content: center;
    color: white;

    @media (max-width: 1024px) {
      max-width: 65%;
    }

    h1 {
      font-size: 2.7rem;
      text-transform: uppercase;

      @media (max-width: 640px) {
        margin-bottom: 8%;
        font-size: 1.8rem;
      }
    }

    form {
      position: relative;
      width: 100%;

      input[type='text'] {
        background-color: transparent;
        color: white;
        width: 100%;
        margin-top: 4%;
        padding: 2%;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid #03ffa5;

        :focus {
          outline: 0;
        }

        ::placeholder {
          padding-bottom: 2%;
          color: white;
        }
      }

      input[type='submit'] {
        cursor: pointer;
        border: 0;
        outline: none;
        background-color: transparent;
        text-transform: uppercase;
        font-weight: bold;
        position: absolute;
        bottom: 15%;
        right: 0;
        color: #03ffa5;

        :hover {
          color: orange;
        }
      }
    }
  }
`
