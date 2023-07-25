import './App.css';
import AllProducts from './componenents/AllProducts';
import Footer from './componenents/Footer';
import Header from './componenents/Header';
import PageNotFound from './componenents/PageNotFound';
import ProductDetail from './componenents/ProductDetail';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<AllProducts></AllProducts>}></Route>
          <Route exact path="/products/:productId" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
