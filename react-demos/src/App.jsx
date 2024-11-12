import React from 'react'
import JSXRules from './components/JSXRules'

const App = () => {
const myName = 'John';
const multiply= (a, b) => a + b 
const specialClass = 'special'


  return (
  
    <section>
        <p>2 + 2 = {2 + 2}</p>
        <h1>{myName}</h1>
        <p>My friends List: {[ 'Alex', 'John', 'Waheed']}</p>
        <p>2 * 2 = { multiply (2, 10)}</p>
        <p className={special}>This is special </p>
    </section>
  
  )
}

export default App