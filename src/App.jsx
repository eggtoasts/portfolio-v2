import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* sidebar here fer now... */}
      <div className="sidebar">
        {/* my name */}
        <p className="main-font name">Sam Amaro</p>

        {/* navigation goes here */}
        <div className="explore">
          <p className="sub-font">EXPLORE</p>

          <div className="sidebar-nav main-font">
            <button className="selected">Projects</button>
            <button>About</button>
            <button>Playground</button>
            <button>Resume</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
