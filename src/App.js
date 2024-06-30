import { useSelector } from 'react-redux';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import CreatePost from './components/post/createPost/CreatePost';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const isAuthenticated = useSelector((state)=> state.loginReducer);
  const postcreate = useSelector((state)=> state.createPostReducer);

console.log(postcreate)
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Signin/>} />

        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        {/* <Route path='/post/create' element={<CreatePost/>} /> */}
        <Route path='/post/create' element={<ProtectedRoute element={CreatePost} />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
