import styled from 'styled-components'
const Rules = () => {
  return (
    <Rule2Container>
      <h2>How to play the game </h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on Dice image</p>
        <p> after clicking on dice if selected number is equal to dice number you will get same point as dice {" "} </p>
        <p>if you get wrong guess then 2 point will be deducted </p>
      </div>
    </Rule2Container>
  )
}

export default Rules
 const Rule2Container = styled.div`
 background-color: #f0d2d2;
 /* background-color: transparent; */
 backdrop-filter: blur(50px);
 padding: 20px;
 max-width: 800px;
 margin: 0 auto;
 margin-top: 40px;
 border-radius: 10px;
 position:absolute;
 top: 30%;
 left: 30%;

 h2{
    font-size: 24px;
 }
 .text{
    margin-top: 24px;
 }
 p{
    font-weight: bolder;
 }
 `