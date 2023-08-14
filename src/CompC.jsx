import { useDispatch } from 'react-redux'
import { increment } from './services/counterSlice';

const CompC = () => {
    const dispatch = useDispatch();
  return (
    <div>
      <h1>CompC</h1>
      <button onClick={()=>dispatch(increment())}> + </button>
    </div>
  )
}

export default CompC
