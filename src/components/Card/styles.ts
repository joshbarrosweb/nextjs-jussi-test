import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15% 2% 2% 2%;
  width: 209px;
  height: 271px;
  background-color: white;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  button {
    background-color: transparent;
    border: 1px solid #ee0e7d;
    border-radius: 20px;
    color: #ee0e7d;
    padding: 4% 8%;
    margin: 0 auto 5% auto;
    width: 70%;
    height: 36px;
    font-size: 1.2rem;
    font-weight: 500;

    &:hover {
      background-color: #ee0e7d;
      color: white;
    }
  }
`
