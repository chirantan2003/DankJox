import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Content from "./components/Content";
import { Parallax } from "react-parallax";
import background from "./images/background.gif";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  const [menuItem, setMenuItem] = useState(true);

  return (
    <div className="trial">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="0, 255, 65"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Navbar setMenuItem={setMenuItem} />
      <div>
        <Parallax
          bgImage={background}
          strength={800}
          bgImageStyle={{ height: "100vh", width: "50vw", marginTop: "10vh" }}
        >
          <div className="parallaxEffect">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Content menuItem={menuItem} />
          </div>
        </Parallax>
      </div>
    </div>
  );
}
