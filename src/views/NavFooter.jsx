const React = require('react');

const Layout = require('./Layout');

module.exports = function NavFooter({ children, userID }) {
  return (

    <Layout>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning p-3">
        <span className="navbar-brand mb-0 h1">FLASHCARDS</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href={`/home/${userID}`}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/stats/${userID}`}>Stats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Logout</a>
            </li>
          </ul>
        </div>
      </nav>

      {children}

      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          <a className="text-dark" href="http://localhost:7777/">© 2022 Copyright: Volodya, Sanya, Danya</a>
        </div>
      </footer>
    </Layout>
  );
};
