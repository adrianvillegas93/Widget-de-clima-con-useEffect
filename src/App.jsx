import { useState } from 'react'
import reactLogo from './assets/react.svg'
import WheatherApp from './components/WeatherApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WheatherApp />
    </>
  )
}

export default App
