import { useSelector } from 'react-redux'

const CompA = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <h1>CompA - {count} </h1>
    </div>
  )
}

export default CompA
