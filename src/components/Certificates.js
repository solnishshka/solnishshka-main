import styled from 'styled-components'
import RightColumn from "./RightColumn/RightColumn";
import firstCert from '../images/certificate_1.png';
import secondCert from '../images/certificate_2.png';

export const Image = styled.img`
    width: 48%;
    padding: 1%;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 5%;
      }
`

export default function Portfolio() {
    return (
      <RightColumn>
        <Image src={firstCert} alt="Сертификат об окончании обучения в Я.Практикуме"/>
        <Image src={secondCert} alt="Сертификат об окончании обучения в Я.Практикуме"/>
      </RightColumn>
    )
}
  