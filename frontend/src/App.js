import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./pages/Nav";
import Footer from './pages/Footer';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Posts from './pages/Posts';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import UserProfile from './User_Profile/UserProfile';
import UserPosts from './User_Profile/UserPosts';
import PostsDetails from "./pages/PostsDetails";

function App() 
{
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>



          <Route path="/" element={<Home/>} />
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/Posts" element={<Posts/>} />
          <Route path="/Albums" element={<Albums/>} />
          <Route path="/Photos/:albumId" element={<Photos/>} />
          <Route path="/UserProfile" element={<UserProfile/>} />
          <Route path="/UserPosts" element={<UserPosts/>} />
          <Route path="/PostsDetails/:postId" element={<PostsDetails/>} />



        </Routes>
        <Footer />
      </BrowserRouter>








    </div>
  );
}

export default App;
