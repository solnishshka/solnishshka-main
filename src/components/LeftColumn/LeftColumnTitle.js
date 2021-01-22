import styled from 'styled-components'

const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin: 90px 40px 0 auto;
  max-width: 200px;
  text-align: end;

  @media screen and (max-width: 767px) {
    margin: 90px auto 30px auto;
    text-align: start;
    max-width: 90%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
`

export default function LeftColumnTitle(props) {
  return <Title>{props.children}</Title>
}
