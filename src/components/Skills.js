import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import styled from 'styled-components'
import RightColumn from './RightColumn/RightColumn'
import { Table, TableHard, TableAdvanced } from './RightColumn/RightColumnTable'
import { RightColumnText } from './RightColumn/RightColumnText'
import { v4 as uuidv4 } from 'uuid'
import {
  ProgressBar100,
  ProgressBar75,
  ProgressBar50,
} from './RightColumn/RightColumnDecoration'

const Title = styled.h2`
  color: ${(props) => props.theme.colors.yellow};
  font-weight: 400;
  margin: 0;
  margin-bottom: 40px;
  font-size: 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`

export default function Skills(props) {
  const translation = useContext(TranslationContext)
  
  return (
    <RightColumn>
      <Title>HARD SKILLS</Title>
      <TableHard>
        {translation.skills.hard.map((skill) => (
          <li key={uuidv4()}>
            <RightColumnText>{skill}</RightColumnText>
            {skill.match(/JavaScript|TypeScript|React|HTML5|CSS|OOP|ООП|BEM|БЭМ/) && <ProgressBar100 />}
            {skill.match(/Git|REST Api/) && <ProgressBar75 />}
            {skill.match(/Node.js|Webpack|Docker|Nginx/) && <ProgressBar50 />}
          </li>
        ))}
      </TableHard>
      <Title>ADVANCED SKILLS</Title>
      <TableAdvanced>
        {translation.skills.advanced.map((skill) => (
          <li key={uuidv4()}>
            <RightColumnText>{skill}</RightColumnText>
            {skill.match(/Scrum/) && <ProgressBar100 />}
            {skill.match(/Linux|Figma/) && <ProgressBar75 />}
            {skill.match(/CMS ModX, Wordpress|PHP|Photoshop/) && <ProgressBar50 />}
          </li>
        ))}
      </TableAdvanced>
      <Title>SOFT SKILLS</Title>
      <Table>
        {translation.skills.soft.map((skill) => (
          <li key={uuidv4()}>
            <RightColumnText>{skill}</RightColumnText>
          </li>
        ))}
      </Table>
    </RightColumn>
  )
}
