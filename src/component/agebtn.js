import React from "react";

const AgeBtn = ({handleAge}) => {
    return (
        <>
            <button onClick={handleAge}>Increment the Count</button>
        </>
    );
};

export default React.memo(AgeBtn);
