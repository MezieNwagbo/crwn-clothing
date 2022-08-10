import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>

      {/* create your routes to other pages here */}
    </div>
  );
}

export default App;
