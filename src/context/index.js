import React, {Component} from "react";

//can create with fucntion and class component

// 1 first create instance of a context
// 2 instance need a provider
//Main idea to create a context is that it creates state

const MyContext = React.createContext();

class Myprovider extends Component {
    state = {
        users: [
            {id: 1, name: "Yash"},
            {id: 2, name: "Prashant"},
            {id: 3, name: "Mark"},
        ],
    };
    render() {
        return <MyContext.Provider value={this.state}>{this.props.childern}</MyContext.Provider>;
    }
}

export {MyContext, Myprovider};
