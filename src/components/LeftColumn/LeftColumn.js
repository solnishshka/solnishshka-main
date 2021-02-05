import styled from 'styled-components'

const LeftColumnElement = styled.div`
  background-color: ${(props) =>
    props.color === 'dark'
      ? props.theme.colors.bgColorDark
      : props.theme.colors.bgColorLight};
  ${(props) =>
    props.isLead &&
    'display: flex; flex-direction: column; justify-content: space-between; align-items: center;'}
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export default function LeftColumn(props) {
  return (
    <LeftColumnElement
      color={props.color}
      isLead={props.isLead}
      id={props.type}
    >
      {props.children}
    </LeftColumnElement>
  )
}
