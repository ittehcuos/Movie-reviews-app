export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar  />
        <Routes>
               <Route path='/' exact element={<Home/>} />
               <Route path='/details/:id'  exact element={<Details/>} />
               <Route path='/login' exact element={<Login/>} />
               <Route patch='*' exact element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
