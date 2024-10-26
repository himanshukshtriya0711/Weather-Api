import './App.css'

import WeatherApp from './WeatherApp';

function App() {
  const backgroundImage = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msDMQ.img"

  return (
    <div style={{backgroundImage: backgroundImage,backgroundSize: 'cover',backgroundPosition: 'center',height: '100vh',width: '100vw',margin: 0,overflow: 'hidden'}}>
     
      <WeatherApp/>
    </div>
  )
}

export default App
