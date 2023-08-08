import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login'
import Private from './components/PrivateComponents';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Update from './components/Update';



function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>

    <Route element={<Private />} >
    <Route path='/' element={<Products />}/>
    <Route path='/add' element={<AddProduct/>}/>
    <Route path='/update/:id' element={<Update />}/>
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
