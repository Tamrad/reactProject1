import React, {useState} from 'react';

export default function Bigcountermoments({initialCount}) {
    const [num, setNum] = useState(initialCount);
    
    return (
        <>
            <button onClick={() => setNum(prevNum => prevNum - 1)}>-</button>
            <span>{num}</span>
            <button onClick={() => setNum(prevNum => prevNum + 1)}>+</button>
        </>
    );
}