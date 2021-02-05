import styled from 'styled-components'

const RightColumnElement = styled.section`
  padding-left: 70px;
  padding-top: ${(props) => (props.isLead ? '200px' : '90px')};
  margin-bottom: 40px;

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    ${(props) => props.isLead && 'padding-top: 150px'};
  }

  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: ${(props) => (props.isLead ? '0' : '50px')};
    padding-bottom: 30px;
  }
`

export default function RightColumn(props) {
  return (
    <RightColumnElement isLead={props.isLead}>
      {props.children}
    </RightColumnElement>
  )
}
