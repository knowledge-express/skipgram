# skipgram
For all your n-gram and skip-gram needs 🔠

![NPM](https://img.shields.io/npm/v/skipgram.svg)
![CircleCI](https://img.shields.io/circleci/project/github/knowledge-express/skipgram/master.svg)
[![Codecov](https://img.shields.io/codecov/c/github/knowledge-express/skipgram.svg)]()

```
npm install -g skipgram
```

```javascript
const skipgram = require('skipgram');
const text = '0 1 2 3 4 5 6 7 8 9';
```

```javascript
skipgram(1)(text);
// [
//   [ '0' ],
//   [ '1' ],
//   [ '2' ],
//   [ '3' ],
//   [ '4' ],
//   [ '5' ],
//   [ '6' ],
//   [ '7' ],
//   [ '8' ],
//   [ '9' ]
// ]
```

```javascript
skipgram(2)(text);
// [
//   [ '0', '1' ],
//   [ '1', '2' ],
//   [ '2', '3' ],
//   [ '3', '4' ],
//   [ '4', '5' ],
//   [ '5', '6' ],
//   [ '6', '7' ],
//   [ '7', '8' ],
//   [ '8', '9' ]
// ]
```

```javascript
skipgram(4)(text);
// [
//   [ '0', '1', '2', '3' ],
//   [ '1', '2', '3', '4' ],
//   [ '2', '3', '4', '5' ],
//   [ '3', '4', '5', '6' ],
//   [ '4', '5', '6', '7' ],
//   [ '5', '6', '7', '8' ],
//   [ '6', '7', '8', '9' ]
// ]
```

```javascript
skipgram(3, 1)(text);
// [
//   [ '0', '2', '4' ],
//   [ '1', '3', '5' ],
//   [ '2', '4', '6' ],
//   [ '3', '5', '7' ],
//   [ '4', '6', '8' ],
//   [ '5', '7', '9' ]
// ]
```
