import BasicForm from './BasicForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="" element={<SignIn/>} />
      <Route path="signup" element={<BasicForm/>} />
      <Route path="navbar" element={<Navbar/>} />

    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
