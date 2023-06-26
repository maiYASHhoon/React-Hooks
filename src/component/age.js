import React from "react";

const Age = ({age}) => {
    return (
        <>
            <h3>The age is : {age}</h3>
            <hr />
        </>
    );
};

export default React.memo(Age);
