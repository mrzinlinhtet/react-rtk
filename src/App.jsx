import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import "./App.css"
import { decrement, increment } from './services/counterSlice'
import CompA from './CompA'
import CompB from './CompB'


const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Redux</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=> dispatch(decrement())}> - </button>
      <button onClick={()=> dispatch(increment())}> + </button>

      <CompA />
      <CompB />
    </div>
  )
}

export default App
