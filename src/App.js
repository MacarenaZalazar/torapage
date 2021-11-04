import './App.css';
import backgroundImg from './utils/background-image.jpg'
import porTodas from './utils/porTodas.mp3'
import { AppContainer } from './appStyle';
import useSound from 'use-sound'
import { useEffect } from 'react';

function App() {
  const[play, {stop}] = useSound(porTodas)
  useEffect(()=>{
    play()
  }, [play])
  return (
    <AppContainer img={backgroundImg}>
      <h1>Bienvenidxs a TORA</h1>
    </AppContainer>
  );
}

export default App;
