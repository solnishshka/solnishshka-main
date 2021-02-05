import { Fragment, useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import { TableExperience, TableTitle } from './RightColumn/RightColumnTable'
import RightColumn from './RightColumn/RightColumn'
import {
  RightColumnTextExperience,
  RightColumnTextItem,
} from './RightColumn/RightColumnText'
import { Circle, Line } from './RightColumn/RightColumnDecoration'
import { v4 as uuidv4 } from 'uuid'

export default function Experience(props) {
  const translation = useContext(TranslationContext)

  return (
    <RightColumn>
      <TableExperience>
        {translation.experience.map((item) => (
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
                <RightColumnTextExperience key={uuidv4()}>{text}</RightColumnTextExperience>
              ))}
            </RightColumnTextItem>
          </Fragment>
        ))}
      </TableExperience>
    </RightColumn>
  )
}
