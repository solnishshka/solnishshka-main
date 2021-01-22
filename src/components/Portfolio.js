import img_1 from '../images/image-1.png'
import img_2 from '../images/image-2.png'
import img_4 from '../images/image_4.png'
import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import RightColumn from './RightColumn/RightColumn'
import { TablePortfolio } from './RightColumn/RightColumnTable'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.textColorLight};
  font-size: 22px;
  transition: color 1s ease;
  margin: auto;
  text-align: center;

  &:hover {
    color: ${props => props.theme.colors.yellow};
    text-decoration: underline;
  }

  @media screen and (max-width: 490px) {
    font-size: 18px;
  }

  @media screen and (min-width: 490px) and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    font-size: 18px;
  }
`

const Image = styled.img`
  max-height: 350px;
  min-height: 350px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 1s linear, opacity 1s linear;
  opacity: 0.6;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
    cursor: pointer;
  }

  @media screen and (max-width: 490px) {
    max-height: 250px;
    min-height: 250px;
  }

  @media screen and (min-width: 490px) and (max-width: 768px) {
    max-height: 220px;
    min-height: 220px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-height: 220px;
    min-height: 220px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    max-height: 300px;
    min-height: 300px;
  }
`

export default function Portfolio(props) {
  const translation = useContext(TranslationContext)

  return (
    <RightColumn>
      <TablePortfolio>
        <Link
          href="https://github.com/solnishshka?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github fa-4x" aria-hidden="true"></i>
          <br />
          {translation.portfolio}
        </Link>
        <a
          href="https://solnishshka.github.io/russian-travel/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={img_4} alt="Превью проекта Путешествия по России" />
        </a>
        <a
          href="https://solnishshka.github.io/mesto-react/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={img_2} alt="Превью проекта Место" />
        </a>
        <a
          href="https://solnishshka.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={img_1} alt="Превью проекта Научиться учиться" />
        </a>
      </TablePortfolio>
    </RightColumn>
  )
}
