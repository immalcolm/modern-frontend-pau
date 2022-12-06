//component to calculate two values that's coming in 

export default function SumOfTwo(props){
    return (
        <div>
            {props.num1 + props.num2}
        </div>
    );
}
//within the curly braces, can put in any expression
//in this sense, we are able to add the two object property values together
//what happens when we pass in strings?
