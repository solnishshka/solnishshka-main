import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import RightColumn from './RightColumn/RightColumn'
import { RightColumnTextAbout } from './RightColumn/RightColumnText'
export default function About(props) {
  const translation = useContext(TranslationContext)

  return (
    <RightColumn>
      <RightColumnTextAbout type="about">{translation.about.p_1}</RightColumnTextAbout>
      <RightColumnTextAbout type="about">{translation.about.p_2}</RightColumnTextAbout>
      <RightColumnTextAbout type="about">{translation.about.p_3}</RightColumnTextAbout>
      <RightColumnTextAbout type="about">{translation.about.p_4}</RightColumnTextAbout>
      <RightColumnTextAbout type="about">{translation.about.p_5}</RightColumnTextAbout>
    </RightColumn>
  )
}
