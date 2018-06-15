const fetch = require('node-fetch');
const express = require('express');
const Table = require('cli-table');
const _ = require('lodash');

const app = express();

app.get('/', async (req, res) => {
  const dataRequest = await fetch('http://worldcup.sfg.io/matches');
  const json = await dataRequest.json();

  const data = _.filter(json, game => game.status === 'completed');
  const result = new Table({
    head: ['Home team', 'Goals', 'VS', 'Goals', 'Away team']
  });

  _.forEach(data, game => {
    result.push([
      game.home_team.country,
      game.home_team.goals,
      '',
      game.away_team.goals,
      game.away_team.country
    ]);
  });

  res.send(`${result.toString()}\n`);
});

app.listen(80, () => {
  console.log('Server listening on port 80!');
});
