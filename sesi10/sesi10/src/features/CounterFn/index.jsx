import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, dynamicIncrement, getData } from "./slice"

const CounterFn = () => {
    const state = useSelector((state) => {
        return {
            title: state.counterFn.title,
            number: state.counterFn.number
        }
    })
    const dispatch = useDispatch()
    return (
        <>
            <h1>{state.title}</h1>
            <div>{state.number}</div>
            <div>
                <button onClick={() => dispatch(dynamicIncrement(2))}>+</button> {' '}
                <button onClick={() => dispatch(decrement())}>-</button> {' '}
            </div>
        </>
    )
}

export default CounterFn