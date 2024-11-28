
import { useState } from 'react'
import UserProfile from './components.tsx/UserProfile'

const App = () => {
const [count, setCount] = useState<number>(0)

const increment = () => {
  setCount(prevCount => prevCount + 1)



}

  return (

   
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <UserProfile />
    </div>
    
  )

}


export default App