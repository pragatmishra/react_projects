import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
   
//   const[counter,setCounter] = useState(15)

//   const addValue = () =>{
//     setCounter(counter+1)
//   }
//   const subtractValue = () =>{
//     setCounter(counter-1)
//   }
//   return (
//     <>
//      <h1>Chai aur react</h1>
//      <h2>Counter value: {counter}</h2>
//      <button onClick={addValue}>Add value {counter}</button>
//      <br/>
//      <button onClick={subtractValue}>Subtract value {counter}</button>
//     </>
//   )
// }

function App(){

   const [counter,setCounter]=useState(0)
  const addValue = ()=>{
    setCounter(counter+1)
  }
  const subtractValue=()=>{
    if(counter > 0) setCounter(counter-1)
  }

  return(
    <>
    <h1>Counter App</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Increase the Value</button>
    <br/>
    <br/>
    <button onClick={subtractValue}>Decrease the Value</button>
   </>
  )
}
export default App
