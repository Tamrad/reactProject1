import React, { useState, useContext } from 'react';
import {contextTheme} from './App';

export default function Bigcountermoments({ initialCount }) {
    const [num, setNum] = useState(initialCount);
    const style = useContext(contextTheme);
    return (
        <>
            <button style = {style} onClick={() => setNum(prevNum => prevNum - 1)}>-</button>
            <span>{num}</span>
            <button style = {style} onClick={() => setNum(prevNum => prevNum + 1)}>+</button>
        </>
    );
}