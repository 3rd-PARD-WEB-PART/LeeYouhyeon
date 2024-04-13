import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import MyInfo from './Pages/MyInfo';
import UpdateInfo from './Pages/UpdateInfo';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<MyInfo/>} ></Route>
        <Route path='/update' element={<UpdateInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
