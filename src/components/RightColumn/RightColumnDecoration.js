import styled from 'styled-components'

export const Circle = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 50%;
  width: 13px;
  height: 13px;
  margin-bottom: 3px;
`

export const Line = styled.div`
  height: 90%;
  width: 1px;
  background-color: ${(props) => props.theme.colors.lineColor};
  margin: 0 auto;

  @media screen and (max-width: 490px) {
    height: 120px;
  }
`

export const ProgressBar100 = styled.div`
  @keyframes loading {
    from {
      width: 0px;
    }
    to {
      width: 200px;
    }
  }
  background-color: ${(props) => props.theme.colors.yellow};
  height: 10px;
  max-width: 200px;
  margin-top: 10px;
  animation: loading 1.5s linear 0s 1;
`

export const ProgressBar75 = styled(ProgressBar100)`
  @keyframes loading_75 {
    from {
      width: 0px;
    }
    to {
      width: 150px;
    }
  }

  animation: loading_75 1.5s linear 0s 1;
  max-width: 150px;
`

export const ProgressBar50 = styled(ProgressBar100)`
  @keyframes loading_50 {
    from {
      width: 0px;
    }
    to {
      width: 100px;
    }
  }
  animation: loading_50 1.5s linear 0s 1;
  max-width: 100px;
`
