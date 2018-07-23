// const helllo =(name, surname)=>
// {  
// 	console.log(arguments)
// 	return "helllo "+name +surname;
// }
// console.log(helllo("vaari"," gupta"));
/// this is not gonna run as arguments is valid only in es5 not in es6

//--------------------------------------------------------------------------------


// const user = {
// 	name : "vaari",
// 	age : 21,
// 	places : ['India','Delhi','New york'],
// 	bio : function(){
// 		console.log(this.name);//this refers to the object itself -user
// 		console.log(this.age);
// 		this.places.map(function(visit)
// 		{
// 			console.log(visit + " is  beautiful");
// 		})
// 	}
// }
// user.bio();

//----------------------------------------------------------------------

// const user = {
// 	name : "vaari",
// 	age : 21,
// 	places : ['India','Delhi','New york'],
// 	bio : function(){
// 		console.log(this.name);//this refers to the object itself -user
// 		console.log(this.age);
// 		var newArray = this.places.map(function(visit)
// 		{
// 			return visit + " is  beautiful"; here we are creating A  new array named "newArray" using map function
// 		})
// 		return newArray;
// 	}
// }
// console.log(user.bio());

//---------------------------------------------------------------------------------



// var name = 'vaari'; 
// var age = 13;
// var places = [1,2,3];
// const user = {
// 	name : "vaari",
// 	age : 21,
// 	places : ['India','Delhi','New york'],
// 	bio : ()=>{
// 		console.log(this.name);//here this is not referencing to the current object rather it's referencing to the parent object due to arrow func
// 		console.log(this.age);
// 	    var newArray = this.places.map((visit)=>
// 		{
// 			return visit + " is  beautiful with " + this.name;
// 		})
// 		return newArray;
// 	}
// }
// console.log(user.bio()); 

/// Here , 'this' keyword is not bound to its object even 
//its bounded to its parent scope when used in the arrow function

//-------------------------------------------------------------------------------------------------

// const user = {
// 	name : "vaari",
// 	age : 21,
// 	places : ['India','Delhi','New york'],
// 	bio : function(){
// 		this.places.forEach(function(data)
// 		{
// 			console.log(data + " comes")
// 		})
	    
// 	}
// }
// user.bio(); 
// console.log(user.places);



///here , forEach not changing the array ,its just rendering the rectified elements of the array not even its creating a new 
/// map function used creates a new array with reformed values

//-----------------------------------------------------------------------------------
// const user = {
// 	name : "vaari",
// 	age : 21,
// 	places : ['India','Delhi','New york'],
// 	bio (){
// 		this.places.forEach(function(data)
// 		{
// 			console.log(data + " comes")
// 		})
	    
// 	}
// }
// user.bio(); 

//-----------------------------------------------------------
 // 1st Method to do Multiply
/// having return statements 

// const taskMultiply = {
// 	list : [1,2,3],
// 	multiplyBy : 10,
// 	multiply()
// 	{
// 		var newList = this.list.map((num)=>{
//              return num*this.multiplyBy;
// 		})

// 		return newList;
// 	}
// }

// console.log(taskMultiply.multiply());

/// -----------------------------------------------------------------------

///2nd Method to do Multiply - The most concise way of writing multiplier function
///there is only one return statement instead of two bcz in multiply we cant use arrow function bcz list becomes undefined 
///bcz it doesnot bind to its current object ,Even its bound to parent object 
///but we can use this.multiplyBy inside of the arrow function bcz the current sope is the mulltiply function so 
///it binds itself with the taskMultiply object hence , can easily access MultiplyBy  


const taskMultiply = {
	list : [1,2,3],
	multiplyBy : 4,
	multiply() {
		return this.list.map((num)=> num* this.multiplyBy)
	}
}

console.log(taskMultiply.multiply());
