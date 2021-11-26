import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: left;
  height: 100%;

  @media (max-width: 1024px) {
    width: 50%;
    text-align: center;
  }

  h1 {
    font-size: 1.8rem;

    @media (max-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin: 5% 0;
    color: #ee0e7d;
    font-size: 1.4rem;
  }

  ul {
    margin-bottom: 10px;

    li {
      list-style-position: inside;
      text-align: left;
      color: #333333;

      @media (max-width: 1024px) {
        text-align: center;
      }
    }
  }

  button {
    cursor: pointer;
    background-color: #03ffa5;
    color: black;
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    height: 36px;
    border: 0;
    border-radius: 5px;
    outline: 0;

    &:hover {
      background-color: #ee0e7d;
      color: white;
    }
  }
`
