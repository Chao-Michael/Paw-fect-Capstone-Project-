import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage/Homepage";
import Form from "./components/Form/Form";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
