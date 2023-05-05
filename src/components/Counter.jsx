import { useState } from 'react';
import '../styles/Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState('Текст в инпуте')

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <p className='count'>{count}</p>
            <button onClick={increment} className='count__btn'>Increment</button>
            <button onClick={decrement} className='count__btn'>Decrement</button>
            <p>{value}</p>
            <input type='text' value={value} onChange={event => setValue(event.target.value)}></input>

        </div>
    )
}

export default Counter;