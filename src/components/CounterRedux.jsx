import { useDispatch, useSelector } from "react-redux"
import { actions } from "../features/counter";


const CounterRedux = () => {

    const value = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increase = () => dispatch(actions.increase());
    const decrease = () => dispatch(actions.decrease());

    return (
        <div>
            Value: {value} - Redux, state finns i store<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default CounterRedux;