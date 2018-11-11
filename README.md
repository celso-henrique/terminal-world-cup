Terminal World Cup
====================
[![Build Status](https://travis-ci.org/celso-henrique/terminal-world-cup.svg?branch=master)](https://travis-ci.org/celso-henrique/terminal-world-cup)

Displays world cup games results into terminal using [Node.js](https://nodejs.org/), [Express](http://expressjs.com/) and this public [World Cup api](http://worldcup.sfg.io/).

# Public service
To see the World Cup results, just run this command into your terminal:
```sh
$ curl "dockerterminalworldcup-env.apnj9mn7zk.us-east-2.elasticbeanstalk.com"
```

# Running locally
With docker installed just run the image:
```sh
$ docker run celsohsilva/terminalworldcup
```

And curl your localhost:
```sh
$ curl localhost:80
```

# License

This project is [MIT licensed](./LICENSE).
