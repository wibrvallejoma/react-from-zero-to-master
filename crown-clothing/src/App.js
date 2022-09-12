// Imports
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from './routes/home/home';
import Shop from './routes/shop/shop';
import Navigation from './components/navigation/navigation.component';

const App = () => {
  return (
    <div className='App'>
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
    </Routes>
    </div>
  );
};

export default App;
