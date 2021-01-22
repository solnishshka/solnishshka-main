import styled from 'styled-components'

export const Table = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-template-rows: repeat(3, 40px);
  column-gap: 140px;
  row-gap: 10px;
  margin: 0 auto;
  max-width: 620px;

  @media screen and (max-width: 490px) {
    column-gap: 0;
    grid-template-columns: 200px;
    grid-template-rows: repeat(6, 40px);
    width: 90%;
    max-width: 200px;
  }

  @media screen and (min-width: 490px) and (max-width: 1024px) {
    column-gap: 40px;
    max-width: 440px;
    grid-template-columns: repeat(2, 200px);
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    column-gap: 100px;
    max-width: 500px;
    grid-template-columns: repeat(2, 200px);
  }
`

export const TableAdvanced = styled(Table)`
  grid-template-rows: repeat(3, 40px);
  margin-bottom: 40px;
  row-gap: 25px;

  @media screen and (max-width: 489px) {
    grid-template-rows: repeat(6, 40px);
  }
`

export const TableHard = styled(Table)`
  grid-template-rows: repeat(5, 40px);
  margin-bottom: 40px;
  row-gap: 25px;

  @media screen and (max-width: 489px) {
    grid-template-rows: repeat(10, 40px);
  }
`

export const TableExperience = styled(Table)`
  grid-template-columns: 13px 220px 350px;
  grid-template-rows: repeat(4, auto);
  gap: 50px;
  max-width: 683px;

  @media screen and (max-width: 490px) {
    grid-template-columns: 13px 180px;
    max-width: 213px;
    gap: 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 490px) and (max-width: 768px) {
    grid-template-columns: 13px 180px 220px;
    max-width: 453px;
    gap: 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 13px 180px 220px;
    max-width: 453px;
    gap: 20px;
    margin: 0;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    grid-template-columns: 13px 220px 280px;
    max-width: 593px;
    gap: 40px;
  }
`

export const TableEducation = styled(Table)`
  grid-template-columns: 13px 220px 350px;
  grid-template-rows: repeat(2, auto);
  gap: 50px;
  max-width: 683px;

  @media screen and (max-width: 490px) {
    grid-template-columns: 13px 180px;
    max-width: 213px;
    gap: 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 490px) and (max-width: 768px) {
    grid-template-columns: 13px 180px 220px;
    max-width: 453px;
    gap: 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 13px 180px 220px;
    max-width: 453px;
    gap: 20px;
    margin: 0;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    grid-template-columns: 13px 220px 280px;
    max-width: 593px;
    gap: 40px;
  }
`

export const TablePortfolio = styled(Table)`
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(2, 350px);
  column-gap: 70px;
  row-gap: 60px;
  max-width: 670px;

  @media screen and (max-width: 490px) {
    grid-template-columns: repeat(1, 250px);
    grid-template-rows: repeat(4, auto);
    margin: 0 auto;
    max-width: 250px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 490px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: repeat(2, 220px);
    gap: 30px;
    max-width: 430px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    grid-template-columns: repeat(2, 250px);
    grid-template-rows: repeat(2, 300px);
    gap: 40px;
    max-width: 540px;
  }
`

export const TableTitle = styled.h2`
  margin: 0;
  text-align: start;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 20px;
  width: 90%;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }
`
