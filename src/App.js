import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calogin from "./components/ca_login/Calogin"
import Customerlogin from "./components/customer_login/CustomerLogin"
import Home from "./components/home/home";
import CustomerSignup from './components/customer_login/CustomerSignup';
import CaSignup from './components/ca_login/CaSignup';
import ServiceCard from './components/service/ServiceCard';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>        
        </Route>
        <Route path="/calogin" element={<Calogin />}>        
        </Route>
        <Route path="/customerlogin" element={<Customerlogin />}>        
        </Route>
        <Route path="/customersignup" element={<CustomerSignup />}>        
        </Route>
        <Route path="/casignup" element={<CaSignup/>}>        
        </Route>
        <Route path="/servicecard" element={<ServiceCard/>}>        
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
