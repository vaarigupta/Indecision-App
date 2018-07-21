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
)			   

var approot = document.getElementById('root');
var approot1 = document.getElementById('root1');

ReactDOM.render(template,approot)
ReactDOM.render(template2,approot1)
