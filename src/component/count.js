import React from "react";

const Count = ({count}) => {
    return (
        <>
            <h3>The Count is : {count}</h3>
            <hr />
        </>
    );
};

export default React.memo(Count);
