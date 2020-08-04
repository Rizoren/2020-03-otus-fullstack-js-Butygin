import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(1);

    const increment = (val: number) => {
        setCount(val + 1);
    };

    const decrement = (val: number) => {
        setCount(val - 1);
    };

    return (
        <div>
            <button onClick={() => decrement(count)}>-</button>
            <input type="number" value={count}/>
            <button onClick={() => increment(count)}>+</button>
        </div>
    );
}

export default Counter;
