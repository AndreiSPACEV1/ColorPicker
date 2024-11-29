import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <MyComponent></MyComponent>
    <Counter></Counter> */}
    <ColorPicker></ColorPicker>
    
    </>
  )
}

export default App
