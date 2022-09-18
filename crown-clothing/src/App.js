// Imports
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from './routes/home/home.route';
import Shop from './routes/shop/shop.route';
import Authentication from './routes/authentication/authentication.route';

// Components
import Navigation from './components/navigation/navigation.component';

const App = () => {
  return (
    <div className='App'>
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
    </Routes>
    </div>
  );
};

export default App;
