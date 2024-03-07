import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home/Home";
import RegistrationPage from "./pages/Registeration/Registeration";
import Gallery from "./pages/Gallery/Gallery";
import Feedback from "./pages/Feedback/Feedback";
import About from "./pages/About/About";
import List from "./pages/List/List";


const App= ()=> {

  return (
    <>
    <Router>
      <AppContent/>
    </Router>
    </>
  )
}

const AppContent = () =>{
  return(
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/Register' Component={RegistrationPage} />        
        <Route exact path='/Gallery' Component={Gallery} />   
        <Route exact path='/Feedback' Component={Feedback} />  
        <Route exact path='/About' Component={About} />  
        <Route exact path='/List' Component={List} />  
      </Routes>
    </>
  )
};

export default App;
