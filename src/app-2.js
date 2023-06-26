import React, {useState, useCallback} from "react";
import Title from "./component/title";
import Count from "./component/count";
import CountBtn from "./component/countBtn";
import Age from "./component/age";
import AgeBtn from "./component/agebtn";
const App = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(10);

    const incrementCount = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const incrementAge = useCallback(() => {
        setAge((prevAge) => prevAge + 1);
    }, []);

    return (
        <>
            <Title />
            <Count count={count} />
            <CountBtn handleCount={incrementCount} />
            <Age age={age} />
            <AgeBtn handleAge={incrementAge} />
        </>
    );
};

export default App;
