import './App.css';
import backgroundImg from './utils/background-image.jpg'
import porTodas from './utils/porTodas.mp3'
import { AppContainer } from './appStyle';
import useSound from 'use-sound'
import { useEffect, useState } from 'react';
import Player from './components/Player';

function App() {
  const[play, {stop}] = useSound(porTodas)
  const [playing, setPlaying] = useState(true)
  useEffect(()=>{
    play()
  }, [play])
  return (
    <AppContainer img={backgroundImg}>
      <h1>Bienvenidxs a TORA</h1>
      <Player play={play} stop={stop} playing={playing} setPlaying={setPlaying} />
    </AppContainer>
  );
}

export default App;
