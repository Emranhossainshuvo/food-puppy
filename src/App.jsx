import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

const App = () => {
  return (
    <div className='app'>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  );
};

export default App;