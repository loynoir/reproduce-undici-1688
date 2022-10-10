### issue
https://github.com/nodejs/undici/issues/1688

### reproduce
start
```sh
$ python3 -m http.server --cgi &
```

node.js
```sh
$ npm test
```

browser

visit http://127.0.0.1:8000/test.html

### Output
node.js
```
  ✔ fetch test: cgi with-content-length
  1) fetch test: cgi without-content-length

  1 passing (60ms)
  1 failing

  1) fetch test: cgi without-content-length:
     TypeError: terminated
      at Fetch.onAborted (node_modules/undici/lib/fetch/index.js:1874:49)
      at Fetch.emit (node:events:513:28)
      at Fetch.terminate (node_modules/undici/lib/fetch/index.js:83:10)
      at Object.onError (node_modules/undici/lib/fetch/index.js:2015:34)
      at Request.onError (node_modules/undici/lib/core/request.js:265:27)
      at errorRequest (node_modules/undici/lib/client.js:1722:13)
      at Socket.onSocketClose (node_modules/undici/lib/client.js:985:5)
      at Socket.emit (node:events:513:28)
      at TCP.<anonymous> (node:net:313:12)
```

browser
```
✔ fetch test: cgi with-content-length
✔ fetch test: cgi without-content-length
```