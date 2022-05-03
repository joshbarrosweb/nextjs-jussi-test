import Image from 'next/image'

import * as S from './styles'

type ProductType = {
  imgUrl: string
  title: string
  description: string
  feature1?: string
  feature2?: string
  feature3?: string
  buttonLabel: string
}

export const Product: React.FC<ProductType> = ({
  imgUrl,
  title,
  description,
  feature1,
  feature2,
  feature3,
  buttonLabel
}) => {
  return (
    <S.Wrapper>
      <Image unoptimized src={imgUrl} alt="product" width={150} height={150} />
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>{feature1}</li>
        <li>{feature2}</li>
        <li>{feature3} </li>
      </ul>
      <button>{buttonLabel}</button>
    </S.Wrapper>
  )
}
