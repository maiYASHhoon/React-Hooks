import React, {useState, useEffect} from "react";
import Post from "./post";
const App = ({initiatlCount}) => {
    // 👉 USE_STATE
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

    // 👉 USE_EFFECT
    const hey = "Hello";
    const alertSomething = () => alert("Something");

    /*useEffect(() => {
        console.log(state);
    }, [state]);
    useEffect(() => {
        console.log(post);
    }, [post]);
    useEffect(() => {
        console.log(Mounted);
    }, []);*/

    const restOne = () => {
        setState((prevState) => {
            return {...prevState, count: prevState.count - 1};
        });
    };

    const removePost = () => {
        setPost([]);
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
                <Post item={item} key={i} />
            ))}
            <button onClick={addOnePost}>Add One More</button>
            <button onClick={removePost}>Remove Post</button>
        </>
    );
};

export default App;
