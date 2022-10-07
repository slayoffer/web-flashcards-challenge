const React = require('react');

const NavFooter = require('./NavFooter');

module.exports = function Main({ decks, userID }) {
  return (

    <NavFooter userID={userID}>

      <div class='flesh-card-decks'><h1> Flash Card Decks</h1></div>
      <div id="decks-container" className="">

        {decks.map((deck) => (
          <div data-key={deck.id} className="card" style={{ width: '18 rem' }}>
            <div className="card-body">
              <img src={deck.image} style={{ width:"250px", height:"320px"}}></img>
              <h5 className="card-title">{deck.name}</h5>
              <button type="button" className="btn card-button"><a className="text-decoration-none text-reset" href={`/decks/${deck.id}`}>Play</a></button>
            </div>
          </div>
        ))}

      </div>
    </NavFooter>

  );
};
