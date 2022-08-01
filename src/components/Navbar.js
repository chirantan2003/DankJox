import "./navbar.scss";

export default function Navbar({ setMenuItem }) {
  function factsOnClick() {
    setMenuItem(false);
  }

  function jokesOnClick() {
    setMenuItem(true);
  }
  return (
    <>
      <div className="menu">
        <ul className="logo">
          <li>
            DANK<span>JOX</span>
          </li>
        </ul>

        <ul className="menuList">
          <li className="menuListItem" onClick={jokesOnClick}>
            Jokes
            <span className="mask">
              <span>Jokes</span>
            </span>
            <span className="mask">
              <span>Jokes</span>
            </span>
          </li>
          <li className="menuListItem" onClick={factsOnClick}>
            Facts
            <span className="mask">
              <span>Facts</span>
            </span>
            <span className="mask">
              <span>Facts</span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
