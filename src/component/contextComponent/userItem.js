import React, {useContext} from "react";
import {MyContext} from "../../context/index";

const UsersItem = (props) => {
    const context = useContext(MyContext);

    console.log(context);

    console.log("user");
    return <>user item</>;
};

export default UsersItem;
