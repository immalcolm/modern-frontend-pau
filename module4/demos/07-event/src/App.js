import Btn from "./Btn";
import Numberbox from "./Numberbox";
import NumerboxCounter from "./NumerboxCounter";
import Ticklebox from "./Ticklebox";
import Dice from "./Dice";
import ColoredDiceIfElse from "./ColoredDiceIfElse";
import ColoredDiceFunc from "./ColoredDiceFunc";
import ColoredDiceTernary from "./ColoredDiceTernary";

function App() {
  return (
    <div>
      <Btn />

      <br/>
      <Numberbox/>

      <br/>
      <NumerboxCounter/>

      <Ticklebox/>

      <Dice/>

      <ColoredDiceIfElse/>

      <ColoredDiceFunc/>

      <ColoredDiceTernary/>
    </div>
  );
}

export default App;
