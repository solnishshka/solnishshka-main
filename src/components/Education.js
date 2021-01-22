import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import RightColumn from './RightColumn/RightColumn'
import { TableEducation, TableTitle } from './RightColumn/RightColumnTable'
import {
  RightColumnTextExperience,
  RightColumnTextItem,
} from './RightColumn/RightColumnText'
import { Circle, Line } from './RightColumn/RightColumnDecoration'

export default function Education(props) {
  const translation = useContext(TranslationContext)

  return (
    <RightColumn>
      <TableEducation>
        <li>
          <Circle />
          <Line />
        </li>
        <li>
          <RightColumnTextExperience>
            2020 - {translation.experience.praktikum.present}
          </RightColumnTextExperience>
          <TableTitle>{translation.experience.praktikum.title}</TableTitle>
          <RightColumnTextExperience>
            {translation.experience.praktikum.job}
          </RightColumnTextExperience>
        </li>
        <RightColumnTextItem>
          <RightColumnTextExperience>
            {translation.experience.praktikum.description_1}
          </RightColumnTextExperience>
          <RightColumnTextExperience>
            {translation.experience.praktikum.description_2}
          </RightColumnTextExperience>
        </RightColumnTextItem>
        <li>
          <Circle />
          <Line />
        </li>
        <li>
          <RightColumnTextExperience>2006 - 2008</RightColumnTextExperience>
          <TableTitle>{translation.experience.mai.title}</TableTitle>
          <RightColumnTextExperience>
            {translation.experience.mai.job}
          </RightColumnTextExperience>
        </li>
        <RightColumnTextItem>
          <RightColumnTextExperience>
            {translation.experience.mai.description}
          </RightColumnTextExperience>
        </RightColumnTextItem>
      </TableEducation>
    </RightColumn>
  )
}
