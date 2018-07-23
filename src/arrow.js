function getfirstname(name)
{
  var firstname = name.split(" ")[0];
  return firstname;
}
var getfirstname1 = (name)=>{
 var firstname =name.split(" ")[1];
  return firstname; 
}
var getfirstname2 = (name)=> name.split(" ")[2];

console.log(getfirstname("hellooo loki"));
console.log(getfirstname1("hellooo loki how's you"));
console.log(getfirstname2("hellooo loki love you"));


