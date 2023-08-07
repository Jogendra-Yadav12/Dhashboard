import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login'
import Private from './components/PrivateComponents';
import AddProduct from './components/AddProduct';



function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>

    <Route element={<Private />} >
    <Route path='/' element={<h1>Product</h1>}/>
    <Route path='/add' element={<AddProduct/>}/>
    <Route path='/update' element={<h1>Update Product</h1>}/>
    <Route path='/logout' element={<h1>Logout User</h1>}/>
    <Route path='/profile' element={<h1>User Profile</h1>}/>
    </Route>
    
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer / >
    </BrowserRouter>
  );
}

export default App;
