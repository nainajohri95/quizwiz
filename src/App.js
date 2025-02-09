import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Landing from './components/Landing';
import Game from './components/game/Game';
import LeaderBoard from './components/game/LeaderBoard';
import About from './components/common/About';
import { ThemeProvider } from './theme-context';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <div>
      <Navbar/>
      <main>
        <Routes className = "">
          <Route path="/" element={<Landing/>}/>
          <Route path='/game' element={<Game/>}></Route>
          <Route path='/leaderboard' element={<LeaderBoard/>}></Route>
          <Route path='/about' element={<About/>}></Route>

        </Routes>
      </main>
    </div>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
