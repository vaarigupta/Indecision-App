"use strict";

console.log("React");
var template = React.createElement(
  "p",
  null,
  "hey Loki"
);

var approot = document.getElementById('root');

ReactDOM.render(template, approot);
