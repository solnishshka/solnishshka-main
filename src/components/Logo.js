import styled from 'styled-components'

const Link = styled.a`
  font-size: ${(props) => (props.type === 'footer' ? '14px;' : '28px;')}
  color: ${(props) => props.theme.colors.textColorLight};
  text-decoration: none;

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    font-size: ${(props) => (props.type === 'footer' ? '14px;' : '22px;')}
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    ${(props) => (props.type === 'footer' ? '14px;' : '18px;')}
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

const Span = styled.span`
  color: ${props => props.theme.colors.yellow};
`

export default function Logo(props) {
  return (
    <Link type={props.type} href="#">
      <Span>SOLN</Span>ishshka
    </Link>
  )
}
