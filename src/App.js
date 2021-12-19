import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import CityList from './pages/CityList';
import Home from './pages/Home';
import News from './pages/News'
import Mine from './pages/Mine'
import FindHouse from './pages/FindHouse'
import Index from './pages/Index'

function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置路由 */}
        <Routes>
          {/* 默认路由，重定向 */}
          <Route exact path="/" element={<Navigate to="/home" />} ></Route>
          <Route path="/home" element={<Home />} >
            <Route exact path="/home" element={<Index />}></Route>
            <Route path="/home/findhouse" element={<FindHouse />}></Route>
            <Route path="/home/news" element={<News />}></Route>
            <Route path="/home/mine" element={<Mine />}></Route>
          </Route>
          <Route excat path="/citylist" element={<CityList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
