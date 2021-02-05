import styled from 'styled-components'
import { TranslationContext } from '../contexts/translationContext'
import { useContext } from 'react'

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.bgColor};
  transition: transform 1s linear;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`

const ButtonElement = styled(Button)`
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

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.buttonTextColor};
  font-size: ${(props) => (props.isLead ? '18px' : '14px;')}
  transition: transform 1s linear;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => (props.isLead ? '14px' : '12px;')}
  }
`

export default function DownloadButton(props) {
  const translation = useContext(TranslationContext)

  return (
    <ButtonElement
      isHeader={props.type === 'header' && true}
      isLead={props.type === 'lead' && true}
    >
      <Link
        isLead={props.type === 'lead' && true}
        href="https://solnishshka.xyz/files/summary.pdf"
        type="application/pdf"
        target="_blank"
        rel="noreferrer"
        download
      >
        {translation.download}
      </Link>
    </ButtonElement>
  )
}
