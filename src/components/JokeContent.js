import "./content.css";
import { useState, useEffect } from "react";
import face1Url from "../images/face1.png";
import face2Url from "../images/face2.png";

export default function JokeContent() {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  const [line, setLine] = useState({
    joke: "",
    punchLine: "",
  });

  const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=double";

  function getJoke() {
    setIsShown(false);
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        console.log(item);
        if (item.type === "single") {
          getJoke();
        } else {
          setLine((prevLine) => ({
            ...prevLine,
            joke: item.setup,
            punchLine: item.delivery,
          }));
        }
      })
      .catch((error) => console.log(error));
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [rotate, setRotate] = useState(0);
  const [faceCounter, setFaceCounter] = useState(true);

  function clickHandlerContent() {
    toggleShown();
    if (isShown) {
      getJoke();
    }
  }

  function clickHandlerImage() {
    setRotate(1);
    toggleShown();
    if (isShown) {
      getJoke();
    }
  }

  function onAnimationHandler() {
    setRotate(0);
    if (!isShown) {
      setFaceCounter((preValue) => !preValue);
    }
  }

  return (
    <>
      <div className="content_outer">
        <div className="content" onClick={clickHandlerContent}>
          <p id="joke">{line.joke}</p>
          {isShown && <p>{line.punchLine}</p>}
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
