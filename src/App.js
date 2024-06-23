import './App.css';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
