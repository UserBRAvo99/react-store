import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, setStep } from '../redux/counterSlice'

export const Counter = () => {
	const { counter, step } = useSelector(state => state.counterSlice)
	const dispatch = useDispatch()
	const handlePlus = () => {
		dispatch(increment())
	}
	const handleChangeStep = e => {
		dispatch(setStep(+e.target.value))
	}

	return (
		<>
			<div>
				<h1>{counter}</h1>
				<input type='text' value={step} onChange={handleChangeStep} />
				<button onClick={() => dispatch(decrement())}>Minus</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
				<button onClick={handlePlus}>Plus</button>
			</div>
		</>
	)
}
