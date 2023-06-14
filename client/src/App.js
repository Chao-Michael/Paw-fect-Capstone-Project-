import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Homepage />
        {/* <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
