import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Article from './Pages/Article';
import Articles from './Pages/Articles';
import Layout from './Pages/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profiles/:username' element={<Profile/>}/>
        <Route path='/articles' element={<Articles/>}>
          <Route path=':id' element={<Article/>}/>  
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
