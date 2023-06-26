import React, {useState} from "react";

const App = ({initiatlCount}) => {
    let [count, setCount] = useState(initiatlCount);

    /* const addOne = () => {
        setCount(count + 1);
    };*/

    const restOne = () => {
        setCount((prevCount) => {
            return prevCount - 1;
        });
    };
    return (
        <>
            <h3>Count: {count}</h3>
            {/* <button onClick={addOne}>Add One +1</button> */}
            <button onClick={() => setCount(count + 1)}>Add One + 1</button>
            <button onClick={restOne}>Rest One - 1</button>
            <button onClick={() => setCount(initiatlCount)}>Reset</button>
        </>
    );
};

export default App;
