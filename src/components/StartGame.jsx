import styled from 'styled-components'
import {Button} from "../styled/Button"
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
        

      </div>
      <div className='content'>
        <h3>Dice Game</h3>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
position: relative;
    max-width: 1180px;
      height: 100vh;
    display: flex;
    align-items: center;
    /* margin: 0 auto; */
    height: 100vh;

    .content {
      h3{
font-size:96px ;
white-space: nowrap;
margin-bottom: 0;
      }
    }
   `;

