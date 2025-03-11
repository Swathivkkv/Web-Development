import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  const friends =["peter", "maya"]

  return (
   <div>
    <p>{friends}</p>

   </div>
  )
}
const Hello = (props) => {
  return(
    <p>Hiii i am swathi {props.name}</p>
  )

}

export default App
