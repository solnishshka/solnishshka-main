import styled from 'styled-components'

const PopupElement = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export default function Popup(props) {
  return <PopupElement className="overlay">{props.children}</PopupElement>
}
