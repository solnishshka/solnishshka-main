import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import styled from 'styled-components'
import RightColumn from './RightColumn/RightColumn'
import { Table, TableHard, TableAdvanced } from './RightColumn/RightColumnTable'
import { RightColumnText } from './RightColumn/RightColumnText'
import {
  ProgressBar100,
  ProgressBar75,
  ProgressBar50,
} from './RightColumn/RightColumnDecoration'

const Title = styled.h2`
  color: ${props => props.theme.colors.yellow};
  font-weight: 400;
  margin: 0;
  margin-bottom: 40px;
  font-size: 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
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
        <li>
          <RightColumnText>JavaScript</RightColumnText>
          <ProgressBar100 />
        </li>
        <li>
          <RightColumnText>React</RightColumnText>
          <ProgressBar75 />
        </li>
        <li>
          <RightColumnText>HTML5</RightColumnText>
          <ProgressBar100 />
        </li>
        <li>
          <RightColumnText>CSS</RightColumnText>
          <ProgressBar100 />
        </li>
        <li>
          <RightColumnText>{translation.skills.oop}</RightColumnText>
          <ProgressBar100 />
        </li>
        <li>
          <RightColumnText>Git</RightColumnText>
          <ProgressBar75 />
        </li>
        <li>
          <RightColumnText>Webpack</RightColumnText>
          <ProgressBar100 />
        </li>
        <li>
          <RightColumnText>{translation.skills.bem}</RightColumnText>
          <ProgressBar100 />
        </li>
        <li>
          <RightColumnText>REST API</RightColumnText>
          <ProgressBar75 />
        </li>
        <li>
          <RightColumnText>Node.js</RightColumnText>
          <ProgressBar50 />
        </li>
      </TableHard>
      <Title>ADVANCED SKILLS</Title>
      <TableAdvanced>
        <li>
          <RightColumnText>Scrum</RightColumnText>
          <ProgressBar100 />
        </li>
        <li>
          <RightColumnText>Figma</RightColumnText>
          <ProgressBar75 />
        </li>
        <li>
          <RightColumnText>Photoshop</RightColumnText>
          <ProgressBar50 />
        </li>
        <li>
          <RightColumnText>Linux</RightColumnText>
          <ProgressBar50 />
        </li>
        <li>
          <RightColumnText>PHP</RightColumnText>
          <ProgressBar50 />
        </li>
        <li>
          <RightColumnText>CMS ModX, Wordpress</RightColumnText>
          <ProgressBar75 />
        </li>
      </TableAdvanced>
      <Title>SOFT SKILLS</Title>
      <Table>
        <li>
          <RightColumnText>{translation.skills.self_managment}</RightColumnText>
        </li>
        <li>
          <RightColumnText>{translation.skills.teamwork}</RightColumnText>
        </li>
        <li>
          <RightColumnText>{translation.skills.communication}</RightColumnText>
        </li>
        <li>
          <RightColumnText>
            {translation.skills.self_dependence}
          </RightColumnText>
        </li>
        <li>
          <RightColumnText>{translation.skills.problems}</RightColumnText>
        </li>
        <li>
          <RightColumnText>{translation.skills.stress}</RightColumnText>
        </li>
      </Table>
    </RightColumn>
  )
}
