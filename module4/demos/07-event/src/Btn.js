//Simple button event handler component
function Btn() {
  //arrow function
  //clickHandler function

  const clickHandler = () => {
    console.log("I'm being clicked on");
  }; //end clickHandler

  return <button onMouseOver={clickHandler}>Click me!!! </button>;
}
export default Btn;

//HTML
//<button>some text</buttton>
