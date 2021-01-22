import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import { TableExperience, TableTitle } from './RightColumn/RightColumnTable'
import RightColumn from './RightColumn/RightColumn'
import {
  RightColumnTextExperience,
  RightColumnTextItem,
} from './RightColumn/RightColumnText'
import { Circle, Line } from './RightColumn/RightColumnDecoration'

export default function Experience(props) {
  const translation = useContext(TranslationContext)

  return (
    <RightColumn>
      <TableExperience>
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
            {translation.experience.praktikum.description_3}
          </RightColumnTextExperience>
          <RightColumnTextExperience>
            {translation.experience.praktikum.description_4}
          </RightColumnTextExperience>
        </RightColumnTextItem>
        <li>
          <Circle />
          <Line />
        </li>
        <li>
          <RightColumnTextExperience>2018 - 2020</RightColumnTextExperience>
          <TableTitle>{translation.experience.yandex.title}</TableTitle>
          <RightColumnTextExperience>
            {translation.experience.yandex.job}
          </RightColumnTextExperience>
        </li>
        <RightColumnTextItem>
          <RightColumnTextExperience>
            {translation.experience.yandex.description_1}
          </RightColumnTextExperience>
          <RightColumnTextExperience>
            {translation.experience.yandex.description_2}
          </RightColumnTextExperience>
        </RightColumnTextItem>
        <li>
          <Circle />
          <Line />
        </li>
        <li>
          <RightColumnTextExperience>2011 - 2018</RightColumnTextExperience>
          <TableTitle>{translation.experience.pkk.title}</TableTitle>
          <RightColumnTextExperience>
            {translation.experience.pkk.job}
          </RightColumnTextExperience>
        </li>
        <RightColumnTextItem>
          <RightColumnTextExperience>
            {translation.experience.pkk.description}
          </RightColumnTextExperience>
        </RightColumnTextItem>
        <li>
          <Circle />
          <Line />
        </li>
        <li>
          <RightColumnTextExperience>2009 - 2011</RightColumnTextExperience>
          <TableTitle>{translation.experience.nyanushka.title}</TableTitle>
          <RightColumnTextExperience>
            {translation.experience.nyanushka.job}
          </RightColumnTextExperience>
        </li>
        <RightColumnTextItem>
          <RightColumnTextExperience>
            {translation.experience.nyanushka.description}
          </RightColumnTextExperience>
        </RightColumnTextItem>
      </TableExperience>
    </RightColumn>
  )
}
