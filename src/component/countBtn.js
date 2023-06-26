import React from "react";

const CountBtn = ({handleCount}) => {
    return (
        <>
            <button onClick={handleCount}>Increment the Count</button>
        </>
    );
};

export default React.memo(CountBtn);
