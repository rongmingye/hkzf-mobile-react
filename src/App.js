import './App.css';
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom';
import CityList from './pages/CityList';
import Home from './pages/Home';
import News from './pages/News'
import Mine from './pages/Mine'
import FindHouse from './pages/FindHouse'
import First from './pages/First'


function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置路由 */}
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/home" element={<First />}></Route>
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
