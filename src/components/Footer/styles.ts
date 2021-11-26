import styled from 'styled-components'

export const Wrapper = styled.main`
  padding: 2%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #000000;

  .logo-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 25%;

    @media (max-width: 640px) {
      width: 100%;
      justify-content: center;
    }
  }

  .blank-wrapper {
    width: 50%;
  }

  .social-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 25%;
    gap: 16px;

    @media (max-width: 640px) {
      width: 100%;
      justify-content: center;
    }

    svg {
      cursor: pointer;
      background-color: transparent;
      color: white;
      height: 24px;
      width: 24px;

      &:hover {
        color: orange;
      }
    }
  }
`

export const Logo = styled.img.attrs({
  src: `assets/wppcompany.png`
})`
  width: 142px;
  height: 27px;
  align-items: center;
  vertical-align: middle;
`
