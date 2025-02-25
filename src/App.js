
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Editor from './Pages/Editor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="landingpage"/>}/>
        <Route path='landingpage' element={<LandingPage/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>}/>
        <Route path='editor' element={<Editor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
