import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/register';
import Home from './components/Home';
import Todo from './components/Todo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/todo" element={<Todo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
