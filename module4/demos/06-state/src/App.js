
import Numberbox from './Numberbox';
import Counter from './Counter';
import Counter2 from './Counter2';

function App() {
  return (
   <div>
    <Numberbox/>
    <br/>
    <Numberbox/>

    <Counter initialValue={105}/>
    <br/><br/>
    <Counter2 initialValue={1}/>
   </div>
  );
}

export default App;
