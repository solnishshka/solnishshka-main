import Social from './Social'
import RightColumn from './RightColumn/RightColumn'
import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import styled from 'styled-components'

const Title = styled.h1`
  @keyframes appearance {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }

  font-size: 62px;
  font-weight: 500;
  margin: 0;
  max-width: 700px;
  animation: appearance 2s 1 both;
  text-align: start;

  @media screen and (max-width: 490px) {
    font-size: 24px;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
  }

  @media screen and (min-width: 490px) and (max-width: 768px) {
    font-size: 34px;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 40px;
    max-width: 500px;
    margin: 0;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 58px;
  }
`

const Span = styled.span`
  color: ${(props) => props.theme.colors.yellow};
  margin-left: 10px;
`

const Description = styled.p`
  font-size: 36px;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 50px;
  max-width: 420px;
  font-weight: 300;
  text-align: start;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    font-size: 22px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin: 30px 0;
    text-align: center;
    max-width: 100%;
  }
`
const Contacts = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  padding: 0;
  border-top: 1px solid rgba(93, 93, 93, 0.3);
  max-width: 820px;
  text-align: start;

  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    min-height: 250px;
    border: none;
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 450px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 700px;
  }
`

const ContactTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;

  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
`

const Text = styled.p`
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-weight: 300;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColorDark};
  transition: color 1s linear;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.yellow};
  }
`

export default function Lead(props) {
  const translation = useContext(TranslationContext)

  return (
    <RightColumn isLead={true}>
      <Title>
        {translation.name}
        <Span>{translation.surname}</Span>
      </Title>
      <Description>Junior Frontend Developer</Description>
      <Social type="lead" />
      <Contacts>
        <li>
          <ContactTitle>{translation.location_title}</ContactTitle>
          <Text>{translation.location}</Text>
        </li>
        <li>
          <ContactTitle>Telegram</ContactTitle>
          <Text>
            <Link href="https://t.me/solnishshka">@solnishshka</Link>
          </Text>
        </li>
        <li>
          <ContactTitle>Email</ContactTitle>
          <Text>
            <Link href="mailto:testsolnishshka@yandex.ru">
              testsolnishshka@yandex.ru
            </Link>
          </Text>
        </li>
      </Contacts>
    </RightColumn>
  )
}
