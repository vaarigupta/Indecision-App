"use strict";

console.log("React");
var template = React.createElement(
	"div",
	null,
	React.createElement(
		"p",
		null,
		"hey Loki "
	),
	React.createElement(
		"p",
		null,
		" I dont know why"
	)
);

var template1 = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Hellloo"
	),
	React.createElement(
		"p",
		null,
		" Name : vaari "
	),
	React.createElement(
		"p",
		null,
		" Age : 21 "
	),
	React.createElement(
		"p",
		null,
		" Location : Delhi "
	)
);

var app = {
	title: "vaari",
	subtitle: "gupta",
	options: ['one', 'two']

};
var greet = "helllo Loki";

if (greet) {
	var greet1 = greet.split(" ")[0];
	console.log(greet1);
}
function hello(greet) {
	return greet1;
}

var template2 = React.createElement(
	"div",
	null,
	app.title ? React.createElement(
		"p",
		null,
		"Title : ",
		app.title
	) : 'Anonymous',
	app.subtitle && React.createElement(
		"p",
		null,
		"Subtitle : ",
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		app.options.length > 0 ? 'Options Available' : 'No options'
	),
	greet1,
	hello(greet)
);
var approot = document.getElementById('root');
var approot1 = document.getElementById('root1');

ReactDOM.render(template2, approot);
