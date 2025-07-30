import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 65 },
    { name: "Shubman Gill", score: 75 },
    { name: "KL Rahul", score: 45 },
    { name: "Hardik Pandya", score: 70 },
    { name: "Ravindra Jadeja", score: 50 },
    { name: "Jasprit Bumrah", score: 60 },
    { name: "R Ashwin", score: 90 },
    { name: "Shreyas Iyer", score: 55 },
    { name: "Suryakumar Yadav", score: 72 },
    { name: "Mohammed Shami", score: 88 },
  ];

  return (
  <div>
    <h2>List of Players and Scores</h2>
    <ul>
      {players.map((player, index) => (
        <li key={index}>{player.name} - Score: {player.score}</li>
      ))}
    </ul>

    <h3>Players with Score Below 70</h3>
    <ul>
      {players
        .filter(player => player.score < 70)
        .map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
    </ul>
  </div>
);

};

export default ListofPlayers;
