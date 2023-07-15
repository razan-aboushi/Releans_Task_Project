import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./pages/Nav";
import Footer from './pages/Footer';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Posts from './pages/Posts';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
function App() 
{
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>




          <Route path="/" element={<Home/>} />
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Posts" element={<Posts/>} />
          <Route path="/Albums" element={<Albums/>} />
          <Route path="/Photos/:albumId" element={<Photos/>} />



        </Routes>
        <Footer />
      </BrowserRouter>








    </div>
  );
}

export default App;
