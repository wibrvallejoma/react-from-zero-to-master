// Imports
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from './routes/home/home.route';
import Shop from './routes/shop/shop.route';
import Login from './routes/login/login.route';

// Components
import Navigation from './components/navigation/navigation.component';

const App = () => {
  return (
    <div className='App'>
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='login' element={<Login />} />
    </Routes>
    </div>
  );
};

export default App;
