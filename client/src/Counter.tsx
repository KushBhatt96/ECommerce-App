import { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>Count: {number}</button>
    </>
  )
}

export default Counter
