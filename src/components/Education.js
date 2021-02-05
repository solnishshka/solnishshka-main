import { Fragment, useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import RightColumn from './RightColumn/RightColumn'
import { TableEducation, TableTitle } from './RightColumn/RightColumnTable'
import {
  RightColumnTextExperience,
  RightColumnTextItem,
} from './RightColumn/RightColumnText'
import { Circle, Line } from './RightColumn/RightColumnDecoration'
import { v4 as uuidv4 } from 'uuid'

export default function Education(props) {
  const translation = useContext(TranslationContext)

  return (
    <RightColumn>
      <TableEducation>
        {translation.education.map((item) => (
          <Fragment key={uuidv4()}>
            <li>
              <Circle />
              <Line />
            </li>
            <li>
              <RightColumnTextExperience>{item.date}</RightColumnTextExperience>
              <TableTitle>{item.title}</TableTitle>
              <RightColumnTextExperience>{item.job}</RightColumnTextExperience>
            </li>
            <RightColumnTextItem>
              {item.description.map((text) => (
                <RightColumnTextExperience key={uuidv4()}>
                  {text}
                </RightColumnTextExperience>
              ))}
            </RightColumnTextItem>
          </Fragment>
        ))}
      </TableEducation>
    </RightColumn>
  )
}
