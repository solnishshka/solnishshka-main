import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import RightColumn from './RightColumn/RightColumn'
import { RightColumnTextAbout } from './RightColumn/RightColumnText'
import { v4 as uuidv4 } from 'uuid';

export default function About(props) {
  const translation = useContext(TranslationContext)

  return (
    <RightColumn>
      {translation.about.map((item) => (
        <RightColumnTextAbout key={uuidv4()} type="about">{item}</RightColumnTextAbout>
      ))}
    </RightColumn>
  )
}
