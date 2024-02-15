import React from 'react';

const Child = () => {
    console.log("child");
    return (
        <div>
            <h1>child comp</h1>
        
        
        </div>
    );
}

export default React.memo(Child);
