# README

Clone this repo, cd into the directory, and do a bundle install as well as an npm install.
PLEASE NOTE: you might encounter an error while doing the NPM install.  This is because there is a syntax error in one of my dependencies, react-cardstack.  In order to fix this, please go to:
'./client/node_modules/react-cardstact/dist/index.js' and replace the line:

var _Cardstack = _interopRequireDefault(require("./Cardstack"));

with:

var _Cardstack = _interopRequireDefault(require("./CardStack"));

Then run rake start and make some events!
