import Image from 'next/image'

import * as S from './styles'

type CardType = {
  imgUrl: string
  buttonLabel: string
}

export const Card: React.FC<CardType> = ({ imgUrl, buttonLabel }) => {
  return (
    <S.Wrapper>
      <Image
        src={imgUrl}
        alt="card"
        width="150%"
        height="150%"
        objectFit="contain"
      />
      <button>{buttonLabel}</button>
    </S.Wrapper>
  )
}
