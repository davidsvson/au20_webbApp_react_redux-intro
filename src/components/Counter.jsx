import { useState } from "react"


// component som har sitt eget state
const Counter = () => {
    const [value, setValue] = useState(10);

    const increase = () => setValue(value + 1);
    const decrease = () => setValue(value - 1);

    return (
        <div>
            Value: {value} - eget state<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;