console.log("React");
var template = (
	   <div>
		<p>hey Loki </p>
		<p> I dont know why</p>
	   </div>
			   );

var template2 = (
<div> 
<h1>Hellloo</h1>
<p> Name : vaari </p>
<p> Age : 21 </p>
<p> Location : Delhi </p>
</div>
);

var app = 
{
  title : "vaari",
  subtitle : "gupta",
  options : ['one', 'two']
  
};
var template3 = (
	<div>
		{ app.title? <p>Title : {app.title}</p> : 'Anonymous'}
		{app.subtitle && <p>Subtitle : {app.subtitle}</p>} 
		<p>{(app.options.length > 0) ? 'Options Available' : 'No options' }</p>             
	</div>		


);			   
var approot = document.getElementById('root');
var approot1 = document.getElementById('root1');

ReactDOM.render(template3,approot);



