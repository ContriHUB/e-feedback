import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="Please remember no use of foul language is permitted on platform."/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>

        
      </Router>
    </NoteState>
  );
}

export default App;
