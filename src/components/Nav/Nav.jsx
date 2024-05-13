import "./styles.css";

function Nav() {
  return (
    <header id="header">
      <h1 id="header-title">
        movie<strong>pick</strong>
      </h1>
      <form id="header-searchForm">
        <input id="input-searchForm" type="text" placeholder="Marvel" />
        <button id="input-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </header>
  );
}

export default Nav;
