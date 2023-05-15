import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PackagesPage from './pages/packagesPage';
import VerifyCheck from './pages/VerifyCheck';
import Dashboard from './pages/Dashboard';
import Manageuser from './pages/Manageuser';
import Package from './pages/Package';
import Verufy from "./pages/Verify";
import Profile from "./pages/Profile";
import Candidate from "./pages/Candidate";
import CandidateProfile from "./pages/CandidateProfile";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/packagesPage' element={<PackagesPage/>}/>
    <Route path='/Candidate' element={<Candidate/>}/>
    <Route path='/CandidateProfile' element={<CandidateProfile />}/>

    <Route path='/VerifyCheck' element={<VerifyCheck/>}/>
    <Route path="/Dashboard" element={<Dashboard/>} />
    <Route path="/Manageuser" element={<Manageuser/>} />
    <Route path="/Package" element={<Package/>}/>
    <Route path="Verufy" element={<Verufy/>}/>
    <Route path="/Profile" element={<Profile />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

