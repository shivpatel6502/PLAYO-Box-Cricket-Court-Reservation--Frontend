import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

// import AdminUsersList from './components/AdminUsersList';
// import SuperAdminDetails from './components/SuperAdminDetails';

import "./styles/App.scss"; 
import "./styles/header.scss";
import "./styles/home.scss";
import Play from "./components/Play";
import Footer from "./components/Footer";
import Book from "./components/BookCourt";
// import AdminLoginBox from "./components/adminLogin";
// import VisulizerLoginBox from "./components/visulizerLogin";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/play" element={<Play/>} />
        <Route path="/book" element={<Book/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;








{/* <Route path="/login" element={<LoginForm/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/adminuserlist" element={<AdminUsersList/>}/>
<Route path="/superadmindetails" element={<SuperAdminDetails/>}/>   
<Route path="/adminlogin" element={<AdminLoginBox/>}/>
<Route path="/visulizerlogin" element={<VisulizerLoginBox/>}/> */}