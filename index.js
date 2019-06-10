const fetch = require('node-fetch');
const express = require('express');
const Table = require('cli-table');

const app = express();

app.get('/', async (req, res) => {
  const dataRequest = await fetch('http://worldcup.sfg.io/matches');
  const games = await dataRequest.json();

  const result = new Table({
    head: ['Home team', 'Goals', 'Goals', 'Away team', 'Status']
  });

  const pastAndPresentGames = games.filter(game => game.status !== 'future');

  pastAndPresentGames.forEach(game => {
    result.push([
      game.home_team.country,
      game.home_team.goals,
      game.away_team.goals,
      game.away_team.country,
      game.status
    ]);
  });

  res.send(
    `
${result.toString()}

Developed by Celso Henrique, for suggestions or improvements, please access:
https://github.com/celso-henrique/terminal-world-cup

`
  );
});

app.listen(80, () => {
  console.log('Server listening on port 80!');
});
