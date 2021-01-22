import styled from 'styled-components'

export const RightColumnText = styled.p`
  margin: 0;
  margin-bottom: 10px;
  text-align: start;
  font-size: 18px;
  font-weight: 300;
  max-width: 850px;

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
    max-width: 450px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    max-width: 600px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 700px;
  }
`

export const RightColumnTextAbout = styled(RightColumnText)`
  margin: 0 auto 20px auto;
`

export const RightColumnTextExperience = styled(RightColumnText)`
  font-size: 18px;

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    max-width: 220px;
  }
`

export const RightColumnTextItem = styled.li`
  @media screen and (max-width: 489px) {
    display: none;
  }
`
