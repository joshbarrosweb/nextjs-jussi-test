/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as S from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faSearch,
  faShoppingCart,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const [users, setUsers] = useState([])
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get('https://reqres.in/api/users')
      setUsers(response.data.data)
    }
    loadUsers()
  }, [])

  const onChangeHandler = (text: string) => {
    let matches: Array<string> = []

    if (text.length > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, 'gi')
        return user.email.match(regex)
      })
    }
    console.log('matches', matches)

    setSuggestions(matches)
    setText(text)
  }

  const onSuggestionHandler = (text: string) => {
    setText(text)
    setSuggestions([])
  }

  const handleSubmit = (e: event) => {
    e.preventDefault()
  }

  return (
    <S.Wrapper>
      <S.LeftSection>
        <S.Logo />
      </S.LeftSection>
      <S.MiddleLeftSection>
        <div className="nav-menu">
          <a>Nossas Soluções</a>
          <a>Conheça a Jussi</a>
        </div>
      </S.MiddleLeftSection>
      <S.MiddleRightSection />
      <S.RightSection>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <input
              name="search"
              type="text"
              placeholder="Buscar"
              onChange={(e) => onChangeHandler(e.target.value)}
              onBlur={() => {
                setTimeout(() => {
                  setSuggestions([])
                }, 100)
              }}
              value={text}
            />
            <div className="suggestions-wrapper">
              {suggestions &&
                suggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    className="autocomplete-item"
                    onClick={() => onSuggestionHandler(suggestion.email)}
                  >
                    {suggestion.email}
                  </div>
                ))}
            </div>
            <FontAwesomeIcon icon={faSearch} />
          </form>
        </div>
        <div className="secondary-menu">
          <a className="login" href="#">
            Login
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </div>
      </S.RightSection>
      <S.MobileSection>
        <div className="hamburger-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <div className="mobile-nav">
          <ul className={click ? 'mobile-menu active' : 'mobile-menu'}>
            <li className="mobile-nav-item">
              <a className="mobile-links" href="#" onClick={closeMobileMenu}>
                Nossas Soluções
              </a>
            </li>
            <li className="mobile-nav-item">
              <a className="mobile-links" href="#" onClick={closeMobileMenu}>
                Conheça a Jussi
              </a>
            </li>
            <div className="form-wrapper">
              <form onSubmit={handleSubmit}>
                <input
                  name="search"
                  type="text"
                  placeholder="Buscar"
                  onChange={(e) => onChangeHandler(e.target.value)}
                  onBlur={() => {
                    setTimeout(() => {
                      setSuggestions([])
                    }, 100)
                  }}
                  value={text}
                />
                <FontAwesomeIcon icon={faSearch} />
                {suggestions &&
                  suggestions.map((suggestion, i) => (
                    <div
                      key={i}
                      className="autocomplete-item"
                      onClick={() => onSuggestionHandler(suggestion.email)}
                    >
                      {suggestion.email}
                    </div>
                  ))}
              </form>
            </div>
          </ul>
        </div>
      </S.MobileSection>
    </S.Wrapper>
  )
}

export default Header
