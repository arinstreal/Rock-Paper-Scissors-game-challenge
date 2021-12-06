import './App.scss';
import ScorePanel from "./Components/ScorePanel/ScorePanel";
import SelectionPanel from "./Components/SelectionPanel/SelectionPanel";
import { useState } from "react";
import RulesModal from "./Components/RulesModal/RulesModal";

function App() {
  const [isOpenRulesModal, setIsOpenRulesModal] = useState(false);
  const [score, setScore] = useState<number>(0);

  const handleRulesModal = () => {
    setIsOpenRulesModal(prev => !prev);
  }

  const handleAddPoint = () => setScore(prev => (prev + 1));
  const resetGame = () => setScore(0);

  return (
    <div className="app">
      <ScorePanel score={score}/>
      <SelectionPanel addPoint={handleAddPoint} resetGame={resetGame}/>
      <div className="rules-wrapper">
        <button onClick={handleRulesModal}>Rules</button>
      </div>
      {isOpenRulesModal}
      <RulesModal toggleClose={handleRulesModal} isOpen={isOpenRulesModal}/>
    </div>
  );
}

export default App;
