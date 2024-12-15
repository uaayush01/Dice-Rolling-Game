import styled from "styled-components"

const GameOver = () => {
  return (
    <GameOverContainer>
    <p>Game Over!!</p>
    <p>Press "Reset for new Game"</p>
    </GameOverContainer>
  )
}

export default GameOver

const GameOverContainer = styled.div`
background-color: #f0d2d2;
/* background-color: transparent; */
/* display:  ${(props) => (props.endGame ? "block" : "none")}; */
backdrop-filter: blur(50px);
padding: 20px;
max-width: 800px;
height: 30vh;
width: 20vw;
margin: 0 auto;
margin-top: 40px;
margin-left: 150px;
border-radius: 10px;
position:absolute;
top: 30%;
left: 30%;
p{
   font-weight: bolder;
   text-align: center;
}
`