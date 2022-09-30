import './App.css';
import {Box} from "@mui/material";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import About from './pages/about';
import {Navbar} from "./components/navigation";

function App() {
  return (
    <Box>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
    </Box>
  );
}

export default App;
