import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage/Homepage";
import Form from "./components/Form/Form";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import DogPage from "./components/DogPage/DogPage";
import Favourites from "./pages/Favourites/Favourites";
import About from "./pages/About/About";

function App() {
  const [data, setData] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form setData={setData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dogs" element={<DogPage data={data} />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
