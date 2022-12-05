import React from 'react';

function Main(props){
    console.log(props);

    return <h2>{props.greet} there indeed!!! </h2>
}

export default Main;