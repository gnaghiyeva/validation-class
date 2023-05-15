import BasicForm from './BasicForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import { UserContextProvider } from './context/UserContext';


function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<SignIn />} />
            <Route path="signup" element={<BasicForm />} />
            <Route path="navbar" element={<Navbar />} />

          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
