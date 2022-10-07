const React = require('react');

const NavFooter = require('./NavFooter');

module.exports = function Stats({ rounds, userID }) {
  return (
    <NavFooter userID={userID}>
      <div id="statList">
        <img src="https://i.gifer.com/ShcW.gif" className="stats-picture" alt="marvel" />
        <ul className="list-group">
          {rounds.length ? rounds.map((round) => (
            <li key={round.id} className="list-group-item p-2">{`Колода - ${round['Deck.name']}. Количество очков - ${round.score}`}</li>
          )) : <h1 className="h1 mx-auto mt-4 stats-heading" >Пока нет никакой статистики</h1>}
        </ul>
      </div>
    </NavFooter>
  );
};
