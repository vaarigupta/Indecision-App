console.log("React");
var template = (
	   <div>
		<p>hey Loki </p>
		<p> I dont know why</p>
	   </div>
			   );

var template1 = (
<div> 
<h1>Hellloo</h1>
<p> Name : vaari </p>
<p> Age : 21 </p>
<p> Location : Delhi </p>
</div>
);

const app = 
{
  title : "vaari",
  subtitle : "gupta",
  options : ['one', 'two']

};
var greet = "helllo Loki";

if(greet)
{
	var greet1 = greet.split(" ")[0];
	console.log(greet1);
}
function hello()
{   
	
	return greet1;
}


const template2 = (
	<div>
		{ app.title? <p>Title : {app.title}</p> : 'Anonymous'}
		{app.subtitle && <p>Subtitle : {app.subtitle}</p>} 
		<p>{(app.options.length > 0) ? 'Options Available' : 'No options' }</p> 
		 {greet1}     
	</div>		


);			   
const approot = document.getElementById('root');
const approot1 = document.getElementById('root1');

ReactDOM.render(template2,approot);



