import React from "react";

const AppView = (props) =>{
    const { counter, increment } = props;

    return <div className="App">
        <header className="App-header">
            Counter: {counter}
            <button onClick={incrementCounter}>Plus</button>
            <button onCLick={decrementCounter}>Minus</button>
            
        </header>
        </div>
}

export default AppView;