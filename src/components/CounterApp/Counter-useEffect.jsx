import { useEffect, useState } from "react";

export default function CounterUseEffect() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Used useEffect with & without dependency.
    // Executes to render when page loads and state changes as per with & without dependency.
    useEffect(() => {
        console.log("Count is incrementing......");
    }, []);

    return(
        <>
            <h1>Counter App using useEffect Hook</h1>
            <p>Count 1 is : {count1}</p>
            <p>Count 2 is : {count2}</p>
            <button onClick={() => setCount1(count1 + 1)}>Increment Count 1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
        </>
    );
}