import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from 'styled-components'
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules";
import GameOver from "./GameOver";

const GamePlay = () => {
        const [score, setScore] = useState(0);
        const [selectedNumber, setSelectedNumber] = useState()
        const [currentDice, setCurrentDice] = useState(1);
        const [error, setError] = useState("");
        const [showRules, setShowRules] = useState(false);
        const [endGame, setEndGame] = useState(false);

        const generateRandomNumber = (min, max) => {
                return Math.floor(Math.random() * (max - min) + min);
        }

        const roleDice = () => {
                if (!selectedNumber) {
                        setError("You have not selected any number!!")
                        return
                }
                setError("")
                const randomNumber = generateRandomNumber(1, 7)
                setCurrentDice((prev) => randomNumber)

                if (selectedNumber === randomNumber) {
                        if (score <= '-50') {
                                setEndGame(true)
                        }

                        setScore((prev) => prev + randomNumber)
                } else {
                        setScore((prev) => prev - 2);
                }
                selectedNumber(undefined)
        }

        const resetScore = () => {
                setScore(0)
                setCurrentDice(1);
                setSelectedNumber(1)
                setEndGame(false);
        }


        return (
                <MainContainer>
                        <div className="top_section">
                                <TotalScore score={score} />
                                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} />
                        </div>
                        <RoleDice currentDice={currentDice} roleDice={roleDice} />
                        <div className="btns">
                                <OutlineButton onClick={resetScore} >Reset</OutlineButton>
                                <Button onClick={() => setShowRules(prev => !prev)}> {showRules ? "Hide" : "Show"} Rules</Button>
                                {showRules && <Rules />}
                                {endGame && <GameOver/>}

                        </div>
                </MainContainer>
        )

}

export default GamePlay;

const MainContainer = styled.main`

.top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
}
.btns{
    display:flex;
    flex-direction: column;
     justify-content: center;
     gap: 10px;
     align-items: center;
}
`