import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImg from './utils/back.jpg'
import { AppContainer } from './appStyle';
import Links from './components/Links';
import VideoContainer from './components/VideoContainer';
import Bandcamp from './components/Bandcamp';
import Navigator from './components/Navigator';
import About from './components/About';
import { useEffect, useState } from 'react';
import Scroll from './components/Scroll';
import Cafecito from './components/Cafecito';
import Footer from './components/Footer';


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  useEffect(()=> {
      const handleResize = () => {
          setWindowSize(window.innerWidth)
          window.addEventListener('resize', handleResize)
      }
      handleResize()
      return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [])
  return windowSize
}

function App() {
  const size = useWindowSize()
  console.log(size)
  const direction = size < 858 ? 'column' : 'row';
  return (
    <AppContainer size={size} img={backgroundImg}>
      <Navigator size={size} />
      <About size={size} />
      <Bandcamp direction={direction} size={size} />
      <VideoContainer size={size}/>
      <Links size={size} />
      <Scroll/>
      <Cafecito direction={direction}/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
