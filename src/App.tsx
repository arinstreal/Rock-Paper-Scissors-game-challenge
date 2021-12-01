import './App.scss';
import ScorePanel from "./Components/ScorePanel/ScorePanel";
import SelectionPanel from "./Components/SelectionPanel/SelectionPanel";
import { useState } from "react";
import RulesModal from "./Components/RulesModal/RulesModal";

function App() {
  const [isOpenRulesModal, setIsOpenRulesModal] = useState(false);

  const handleRulesModal = () => {
    setIsOpenRulesModal(prev => (!prev));
  }

  return (
    <div className="app">
      <ScorePanel score={12}/>
      <SelectionPanel/>
      <div>
        <button onClick={handleRulesModal}>Rules</button>
      </div>
      {isOpenRulesModal}
      <RulesModal toggleClose={handleRulesModal} isOpen={isOpenRulesModal}/>
    </div>
  );
}

export default App;
