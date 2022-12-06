import SumOfTwo from "./SumOfTwo";


//we place numbers in curly braces (expressions) to give it a num type
//we can always place in variables
//we can use braces {} to define as JS Expression
//we can use parseInt within the {} JS expression
function App() {
  let num = 10;
  return (
    <div >
     <SumOfTwo num1={parseInt("30")} num2={num}/>
    </div>
  );
}

export default App;
