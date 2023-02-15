import React from "react";

// function FunctionalGreetingWithProps(){
//     return <h1>Yello!</h1>
// };

const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Yello, {props.name}! I see you're {props.age} years of age. {props.greeting}</h1>;
}

export default FunctionalGreetingWithProps;