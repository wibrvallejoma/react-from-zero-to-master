// Imports
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from './routes/home/home';
import Shop from './routes/shop/shop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
