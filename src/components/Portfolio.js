import img1 from '../images/image-1.png'
import img2 from '../images/image-2.png'
import img4 from '../images/image_4.png'
import img5 from '../images/img_5.png'
import img6 from '../images/img_6.png'
import img7 from '../images/img_7.png'
import { useContext, useState } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import RightColumn from './RightColumn/RightColumn'
import { TablePortfolio } from './RightColumn/RightColumnTable'
import styled from 'styled-components'
import {Button} from './Button'

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColorLight};
  font-size: 22px;
  transition: color 1s ease;
  margin: auto;
  text-align: center;

  &:hover {
    color: ${(props) => props.theme.colors.yellow};
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

const LinkImage = styled.a`
  overflow: hidden;
`

const Image = styled.img`
  max-height: 350px;
  min-height: 350px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left top;
  transition: transform 1s linear, opacity 1s linear;
  opacity: 0.5;

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

const StyledButton = styled(Button)`
display: block;
margin: 0 auto;
margin-top: 50px;
background-color: ${(props) => props.theme.colors.yellow};
width: 140px;
height: 35px;
color: ${(props) => props.theme.colors.buttonTextColor};
${(props) =>
  props.isLead &&
  'margin-top: 60px; margin-bottom: 200px;width: 180px; height: 50px;'}

@media screen and (max-width: 768px) {
  ${(props) =>
    props.isLead &&
    `margin-top: 40px; margin-bottom: 50px; width: 130px; height: 35px;`}
  ${(props) =>
    props.isHeader &&
    `position: fixed; bottom: 60px; right: 15px; width: 70px; height: 70px; border-radius: 40px;`}
}
@media screen and (min-width: 769px) and (max-width: 1023px) {
  width: 110px;
  height: 25px;
  ${(props) =>
    props.isLead &&
    `margin-top: 30px; margin-bottom: 170px; width: 130px; height: 35px;`}
}
`

export default function Portfolio(props) {
  const [viewAll, setViewAll] = useState(false)
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
        <LinkImage
          href="https://testing-landing-bank.web.app/parent"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={img6}
            alt="Превью лэндинга мобильного банковского приложения"
          />
        </LinkImage>
        <LinkImage
          href="https://coleman-services.ru"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={img7} alt="Превью проекта Coleman Services" />
        </LinkImage>
        <LinkImage
          href="https://solnishshka.github.io/russian-travel/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={img4} alt="Превью проекта Путешествия по России" />
        </LinkImage>
        {
         viewAll && <>
            <LinkImage
              href="https://solnishshka.github.io/react-mesto-auth/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={img2} alt="Превью проекта Место" />
            </LinkImage>
            <LinkImage
              href="https://solnishshka.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={img1} alt="Превью проекта Научиться учиться" />
            </LinkImage>
            <LinkImage
              href="https://compare-starships.web.app"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={img5}
                alt="Превью проекта тестового задания CompareStarships"
              />
            </LinkImage>
          </>
        } 
      </TablePortfolio>
      <StyledButton onClick={() => setViewAll(!viewAll)}>{viewAll ? "Скрыть" : "Показать все"}</StyledButton>
    </RightColumn>
  )
}
