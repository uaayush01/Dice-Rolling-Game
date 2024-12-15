import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  max-width: 200px;
  text-align: center;
  gap: 10px;
  h1 {
    font-size: 100px;
    margin-left: 20px;
     }
  p {
    font-size: 24px;
    margin-top: -100px;
    font-weight: 500px;
    margin-left: -80px;
  }
`;