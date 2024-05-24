import { Link, useSearchParams } from "react-router-dom";
import "./styles.css";
import { useState } from "react";

function Nav({ isHomePage }) {
  const [searchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("search") ?? "");

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <header id="header">
      {!isHomePage && (
        <Link to={"/"} className="header-backBtn">
          <i className="fa-solid fa-angle-left"></i>
        </Link>
      )}
      <h1 id="header-title">
        movie<strong>pick</strong>
      </h1>
      <form id="header-searchForm">
        <input
          id="input-searchForm"
          type="text"
          placeholder="Search a movie"
          onChange={handleChangeInput}
          value={inputValue}
        />
        <Link
          to={`/search?search=${inputValue}`}
          className="a-inputBtn-container"
        >
          <button id="input-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Link>
      </form>
    </header>
  );
}

export default Nav;
