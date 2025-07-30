import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Hardik", "Gill", "Jadeja", "Rahul"];
  const evenTeam = ["Rohit", "Ashwin", "Shami", "Bumrah", "Iyer"];

  // Destructuring the first three players from each team
  const [odd1, odd2, odd3] = oddTeam;
  const [even1, even2, even3] = evenTeam;

  const T20players = ["Kohli", "Rohit", "Pandya"];
  const RanjiTrophyPlayers = ["Pujara", "Karun Nair", "Rahane"];

  // Merge arrays using spread operator
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>All Players (T20 + Ranji Trophy)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
