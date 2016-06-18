/**
 * http://usejsdoc.org/
 */

"use strict";

/*
 * 2 ways to create functions in JS
 * 
 * a. function declaration b. function expression
 * 
 */

// -------------------------
// a. function dec
// console.log(add(12,13));
// function add(n1,n2){
// return n1+n2;
// }
// console.log(add(12,13));

// -------------------------
// function expressio
// console.log(add(12,13));
// var add=function(n1,n2){return n1+n2};
// console.log(add(12,13));

// -------------------------
// function as values
// function sayHello(){
// console.log('hello');
// }
// var sayHi=sayHello;
// sayHi();

// -------------------------

// function as argument

function sayHello(greet) {
	if (greet) {
		greet();
		return;
	}
	console.log("oye..");
}

//sayHello();
//sayHello(function(){console.log('Hello..');})
//sayHello(function(){console.log('Ola..');})

var nums = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];
nums.sort(function(a, b) {
	return a - b;
});
//console.log(nums);

// -----------------------------------

//function as return value


function teach(){
	console.log('teaching...');
	function learn(){
		console.log('learn...');
	}
	//learn();
	return learn;
}

//var learnFunc=teach();
//learnFunc();
//learnFunc();
//learnFunc();


//-----------------------------------
//
//function reflect(a,b,c){
//	console.dir(arguments);
//	return arguments[0];
//}
//
//console.log(reflect(12,13,14));


//-----------------------------------

function sayHi(){
	console.log('oye');
}
//var sayHi=new Function('..');
function sayHi(message){
	console.log('msg-'+message);
}
//var sayHi=new Function('..');

//sayHi();

//-------------------------------------


//function sum(){
//	var i=0,
//	    len=arguments.length,
//	    result=0;
//	while(i<len){
//		result+=arguments[i];
//		i++;
//	}
//	return result;
//}
//
//console.log(sum(1,2,3,4,5,6,7,8,9,10));


//---------------------------------------


// varibale scope

//
//var i=100;  // global-scope
//function display(){
//	"use strict";
//	{
//	let i=200;  // function-scope
//	}
//	console.log(i);
//}
//display();


//------------------------------------------


// implicit globals

//
//function f(){
//	
//	k=12;
//}
//
//f();
//
//console.log(k);

//------------------------------------------



// why we need 'this' keyword ?


var person={
		name:'Nag',
		sayName:function(){
			console.log('im '+this.name);
		}
};

var p=person;
person={name:'Ria'};

//p.sayName();


//--------------------------------------


