import NavBar from './components/NavBar/NavBar';
import Favorite from './components/Favorite/Favorite';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </main>
  );
};

export default App;