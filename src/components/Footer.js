import Social from './Social'
import Logo from './Logo'
import styled from 'styled-components'

const FooterElement = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 85px;
  background-color: ${(props) => props.theme.colors.bgColor};
  padding: 0 40px;

  @media screen and (max-width: 490px) {
    padding: 0 20px;
  }
`

const Copyright = styled.p`
  margin: 0;
`

const Span = styled.span`
  margin-right: 5px;
`

export default function Footer(props) {
  return (
    <FooterElement>
      <Social type="footer" />
      <Copyright>
        <Span>©</Span>
        <Logo type="footer" />
      </Copyright>
    </FooterElement>
  )
}
