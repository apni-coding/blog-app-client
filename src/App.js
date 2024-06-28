import './App.css';
import CreatePost from './components/post/createPost/CreatePost';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Signin/>} />

        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/post/create' element={<CreatePost/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
