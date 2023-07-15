import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./pages/Nav";
import Footer from './pages/Footer';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Posts from './pages/Posts';

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



        </Routes>
        <Footer />
      </BrowserRouter>








    </div>
  );
}

export default App;
