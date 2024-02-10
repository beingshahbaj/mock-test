import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Component2/Contact";
import Bird from "./Component2/Addbird";
import Showbird from "./Component2/LikeBird";
import Undo from "./Component2/Undo/undo";
import Searchfilter from "./Component2/Searchfilter";
function App() {
  return (
    <div>
      {/* <Undo/> */}
      {/* <h1>bird post</h1> */}
      {/* <Bird /> */}
      {/* <Showbird /> */}
      {/* <Contact /> */}
      <Searchfilter />
    </div>
  );
}

export default App;
