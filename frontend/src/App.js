import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer'
import Description from './components/Description'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const App=() => {
  return (
 <>
 <Header/>
 <Router>
  <Routes>
    <Route exact path="/" element={<ProductList/>} ></Route>
    <Route path="/product/:id" element={<Description/>}></Route> 
    <Route path="/addProduct" element={<ProductForm/>}></Route> 
  </Routes>
 </Router>


   
</>

  );
}

export default App;
