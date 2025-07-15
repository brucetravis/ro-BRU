import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Header from './components/common/header/Header';
import Shop from './pages/shop/Shop';
import Footer from './components/common/footer/Footer';
import ProductsUpload from './pages/productsupload/ProductsUpload';
import Registration from './pages/registration/Registration';
import Sellers from './pages/sellers/Sellers';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/sellers' element={<Sellers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/productsupload" element={<ProductsUpload />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

