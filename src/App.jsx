import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Cart from './components/Cart';

import ItemDetailList from './containers/ItemDetailList';
import ItemListContainter from './containers/ItemListContainer';

import { CartContextProvider } from './contexts/CartContext';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


const App = () => {

  return (
    <CartContextProvider>
      <div className="bodyProp">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index path="/" element={<ItemListContainter />} />
            <Route path="/collection/:collectionClass" element={<ItemListContainter />} />
            <Route path="/details/:id" element={<ItemDetailList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  )
}

export default App;
