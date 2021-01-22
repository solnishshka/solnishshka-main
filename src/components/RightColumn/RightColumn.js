import styled from 'styled-components'

const RightColumnElement = styled.section`
  width: 70%;
  margin-left: 70px;
  padding-top: ${(props) => (props.isLead ? '200px' : '90px')};
  margin-bottom: 40px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    ${(props) => props.isLead && 'padding-top: 150px'};
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
    padding-top: ${(props) => (props.isLead ? '0' : '50px')};
    margin-bottom: 30px;
  }
`

export default function RightColumn(props) {
  return (
    <RightColumnElement isLead={props.isLead}>
      {props.children}
    </RightColumnElement>
  )
}
