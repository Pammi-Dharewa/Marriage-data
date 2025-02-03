import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Presentation from './components/Presentation';
import Taken from './components/Taken';
import Data_p from './components/Data_p';
import Data_t from './components/Data_t';


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route> 
      <Route path='/presentaion' element={ <Presentation></Presentation>}></Route>
      <Route path='/taken' element ={<Taken></Taken>}></Route>      
      <Route path='/pdata' element ={<Data_p></Data_p>}></Route>      
      <Route path='/tdata' element ={<Data_t></Data_t>}></Route>      

      </Routes>
      
    </BrowserRouter>
    </> 
  )
}

export default App;