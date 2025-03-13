import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header/header"; 
import Footer from './components/footer/Footer';
import Home from './components/pageshome/Home';
import Onama from './components/pageshome/onama/Onama';
import Blog from './components/pageshome/blog/Blog';
import BlogSingle from "./components/pageshome/blog/BlogSingle";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/pageshome/login/Login';
import Register from "./components/pageshome/login/Register";
import ContactPage from "./components/pageshome/kontakt/ContactPage";
import Navigation from "./components/navigation/Navigation";
import OSkoli from './components/pageshome/oskoli/OSkoli';

function App() {
 

  return (
    <Router>
       <div clasName= "App">
       <Header />

       <Navigation /> 
     
           <Routes>
           <Route path="/pageshome" element={<pageshome />} />
           <Route path="/kontakt" element={<ContactPage />} />
           <Route index element= {<Home />} />
           <Route path="/onama" element= {<Onama />} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/blog/:id" element={<BlogSingle />} />
           <Route path="/login" element={<Login />} />
           <Route path="/forgot-password" element={<div>Zaboravljena lozinka</div>} />
           <Route path="/register" element={<div>Registracija</div>} />
           <Route path="/register" element={<Register />} />
           <Route path="/oskoli" element= {<OSkoli />} />
        </Routes>
        <Footer />
      </div>
    </Router>

    
  )
  ;  
}

export default App;
