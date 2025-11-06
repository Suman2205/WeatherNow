import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';
// import './App.css'

function App() {
  return (
    // <>
    //   <h1>Material UI Demo</h1>
    //   <Button variant="contained">Click me!</Button>
    // </>
    // <>
    //   <SearchBox/>
    //   <InfoBox/>
    // </>
    <>
      <WeatherApp/>
    </>
  )
}

export default App
