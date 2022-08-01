import "./content.css";
import { useState, useEffect } from "react";
import face1Url from "../images/face1.png";
import face2Url from "../images/face2.png";

export default function FaceContent() {
  const [line, setLine] = useState({
    fact: "",
  });

  const url = "https://api.api-ninjas.com/v1/facts?limit=1";

  function getFact() {
    fetch(url, {
      method: "get",
      headers: { "X-Api-Key": "R0Pywu5Tec44w858kU/J2A==JmIKOSTyuPE3M0A2" },
    })
      .then((data) => data.json())
      .then((item) => {
        console.log(item);
        setLine((prevLine) => ({
          ...prevLine,
          fact: item[0].fact,
        }));
      })
      .catch((error) => console.log(error));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getFact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [rotate, setRotate] = useState(0);
  const [faceCounter, setFaceCounter] = useState(true);

  function clickHandlerContent() {
    getFact();
  }

  function clickHandlerImage() {
    setRotate(1);
    getFact();
  }

  function onAnimationHandler() {
    setRotate(0);
    setFaceCounter((preValue) => !preValue);
  }

  return (
    <>
      <div className="content_outer">
        <div className="content" onClick={clickHandlerContent}>
          <p id="joke">{line.fact}</p>
        </div>

        <img
          src={faceCounter ? face1Url : face2Url}
          alt="face"
          className="face"
          onClick={clickHandlerImage}
          onAnimationEnd={onAnimationHandler}
          rotate={rotate}
        />
      </div>
    </>
  );
}
