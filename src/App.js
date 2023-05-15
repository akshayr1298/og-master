import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PackagesPage from './pages/packagesPage';
import VerifyCheck from './pages/VerifyCheck';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/packagesPage' element={<PackagesPage/>}/>
    <Route path='/VerifyCheck' element={<VerifyCheck/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

