import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/about';
import Header from './component/header';
import Home from './pages/home';
import Engrave from './pages/engrave';
import AlbumDetail from './pages/detail';


function App() {
  return (
    <>
     <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:name" element={<AlbumDetail />} />
          <Route path="/engrave" element={<Engrave />} />
        </Routes>    
    </Router>
    </>
  )
}

export default App
