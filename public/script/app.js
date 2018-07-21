'use strict';

console.log("React");
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'p',
		null,
		'hey Loki '
	),
	React.createElement(
		'p',
		null,
		' I dont know why'
	)
);

var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Hellloo'
	),
	React.createElement(
		'p',
		null,
		' Name : vaari '
	),
	React.createElement(
		'p',
		null,
		' Age : 21 '
	),
	React.createElement(
		'p',
		null,
		' Location : Delhi '
	)
);

var approot = document.getElementById('root');
var approot1 = document.getElementById('root1');

ReactDOM.render(template, approot);
ReactDOM.render(template2, approot1);
