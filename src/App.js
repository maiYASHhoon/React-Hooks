import React, {useState} from "react";

const App = ({initiatlCount}) => {
    let [state, setState] = useState({count: initiatlCount, user: "Yash"});

    let [post, setPost] = useState([
        {
            name: "Hooks",
            body: "Everything for Hooks",
        },
    ]);

    const addOnePost = () => {
        let newPost = {
            name: "JAVASCRIPT",
            body: "Javasscript iss Good",
        };
        setPost([...post, newPost]);
    };
    /* const addOne = () => {
        setCount(count + 1);
    };*/

    const restOne = () => {
        setState((prevState) => {
            return {...prevState, count: prevState.count - 1};
        });
    };
    return (
        <>
            <h1>{state.user}</h1>
            <h3>Count: {state.count}</h3>
            {/* <button onClick={addOne}>Add One +1</button> */}
            <button onClick={() => setState({...state, count: state.count + 1})}>Add One + 1</button>
            <button onClick={restOne}>Rest One - 1</button>
            <button onClick={() => setState({...state, count: initiatlCount})}>Reset</button>

            <hr />
            {post.map((item, i) => (
                <div key={i}>
                    <div>Name: {item.name}</div>
                    <div>Body: {item.body}</div>
                    <hr />
                </div>
            ))}
            <button onClick={addOnePost}>Add One More</button>
        </>
    );
};

export default App;
