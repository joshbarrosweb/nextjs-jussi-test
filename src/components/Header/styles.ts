import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  height: 64px;
  padding: 1% 2%;
  margin-bottom: 1%;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`

export const Logo = styled.img.attrs({
  src: `assets/jussi-logo.svg`
})`
  width: 192px;
  height: 48px;
  align-items: center;
  vertical-align: middle;
`

export const LeftSection = styled.div`
  width: 15%;
  height: 100%;
`

export const MiddleLeftSection = styled.div`
  width: 20%;
  height: 100%;

  @media (max-width: 1024px) {
    display: none;
  }

  .nav-menu {
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: black;
      font-size: 1.2rem;
      font-weight: 500;
      margin: 7.5% auto;
    }
  }
`

export const MiddleRightSection = styled.div`
  width: 35%;
  height: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const RightSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
  padding: 2% 2%;

  @media (max-width: 1024px) {
    display: none;
  }

  form {
    position: relative;
    display: inline-block;

    input[type='text'] {
      padding: 0.5rem;
      border: 0;

      :focus {
        border: 1px solid blue;
        border-radius: 10px;
        outline: 0;
      }

      ::placeholder {
        color: #ee0e7d;
      }
    }

    svg {
      position: absolute;
      height: 16px;
      width: 16px;
      top: 5px;
      right: 15px;
    }
  }

  svg {
    color: black;
    height: 24px;
    width: 24px;
    &:hover {
      color: #ee0e7d;
    }
  }

  .secondary-menu {
    width: 30%;
    display: flex;
    justify-content: space-between;

    padding: 1% 2%;

    .login {
      margin: 3px 0;
    }

    a {
      padding: 1% 2%;
      font-size: 1.5rem;
      text-decoration: none;
      color: black;
    }
  }

  .suggestions-wrapper {
    z-index: 9999;
    position: absolute;
    top: 100%;
    left: 5%;
    height: 100%;
    background-color: orange;
  }

  .autocomplete-item {
    display: block;
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px dotted #cccccc;
    cursor: pointer;
    background: white;
    color: black;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 2% 0;

    &:hover {
      background-color: #03ffa5;
      color: white;
    }
  }
`

export const MobileSection = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: block;
  }

  .autocomplete-item {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px dotted #cccccc;
    cursor: pointer;
    background: white;
    color: black;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 2% 0;
  }

  .hamburger-icon {
    svg {
      z-index: 1;
      margin-top: 10px;
      font-size: 32px;
      color: black;
    }
  }

  .mobile-menu {
    z-index: 999;
    position: absolute;
    top: 70px;
    left: -100%;
    width: 100%;
    height: 200px;
    background-color: #ee0e7d;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    opacity: 0;
    transition: all 1.5s ease;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2% 0;

    @media (max-width: 640px) {
      top: 58px;
    }

    .mobile-nav-item {
      a {
        text-decoration: none;
        color: white;
        font-size: 1.9rem;
      }
    }

    form {
      position: relative;
      display: inline-block;

      input[type='text'] {
        padding: 0.5rem;
        border: 1px dotted blue;
        border-radius: 10px;

        :focus {
          outline: 0;
        }

        ::placeholder {
          color: #ee0e7d;
        }
      }

      svg {
        cursor: pointer;
        position: absolute;
        height: 16px;
        width: 16px;
        top: 5px;
        right: 15px;
      }
    }
  }

  .mobile-menu.active {
    left: 0;
    opacity: 1;
    transition: all 1.5s ease;
    z-index: 1;
  }
`
