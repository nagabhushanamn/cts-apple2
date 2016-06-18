/**
 * http://usejsdoc.org/
 */


/*
 *  JS- datatypes
 *  
 *  a. simple/primitive types   ( values  )
 *  b. complext/reference types ( objects )
 * 
 */

// 1. simple types

/*
 *  a. string
 *  b. number
 *  c. boolean
 *  
 *  d. null
 *  e. undefined
 * 
 * 
 */

//----------------------------------

// a. string

var name="nag";
var selection='a';

//console.log(typeof name);
//console.log(typeof selection);


//----------------------------------

// b. number

var count=10;
var cost=12.12;

//console.log(typeof count);
//console.log(typeof cost);


//----------------------------------


// c. boolean

var found=true;

//console.log(typeof found);



//----------------------------------

// d. undefined

var v;

//console.log(typeof v);


//----------------------------------

// e. null

var person=null;
//console.log(typeof person);

//console.log(person===null);


//----------------------------------


//============================================



//1. complex/reference types ( JS-objects )


/*
 *  person ---> object
 *  
 *  name:'Nag'
 *  age : 32
 *  doWork:function(){
 *  console.log('Teaching JS');
 *  }
 * 
 * ---------------------------
 * 
 * how to create object in JS lang ?
 * 
 * syntax
 * -------
 * 
 * var ref=new ConstructorFunction();
 * 
 * 
 */


var person=new Object();
person.name="nag";
person.age=32;
person.doWork=function(){
	console.log('Teaching JS');
};

//console.log(person.name);
//person.doWork();

delete person.age;

//console.log(person.age);


//----------------------------------

/*
 *  some built-in types
 *  -------------------
 *  
 *  a. Object
 *  b. Array
 *  c. RegExp
 *  d. Function
 *  
 * 
 */

// a. Object

var person=new Object();
person.name="nag";
person.age=32;
person.doWork=function(){
	console.log('Teaching JS');
};

//or  ( literal style )
var person={
		name:'Nag',
		age:32,
		doWork:function(){
			console.log('Teaching JS');
		}
};

//----------------------------------

// b. Array

var arr=new Array();
arr.push('red');
arr[1]='green';
arr.push('blue');

// or ( literal style )

var arr=["red","green","blue"];


//----

//------------------------------

// c. RegExp

var re=new RegExp("\\d{10}");
//console.log(re.test("1234567890"));

//or ( literal style )

var re=/\d{10}/;
//console.log(re.test("phone"));

//--------------------------------

// d. Function

var add=new Function("n1","n2","var sum=n1+n2;return sum;");
//console.log(add(12,13));


//or ( literal style )

function add(n1,n2){
	var sum=n1+n2;
	return sum;
}

//console.log(add(12,13));

add.prop="123";
add.m=function(){
	console.log('m()');
};


//add.m();

//----------------------------------------------

// How to access JS-obj properties ?

/*
 *  2-ways
 *  
 *  way-1 : '.' notation , if it is valid identifier
 *  
 *  else
 *  
 *  way-2 : '[]' notation
 * 
 */

var person={
		name:'Nag',
		'full-name':'Nag N'
};

console.log(person.name);
console.log(person['name']);
console.log(person['full-name']);


var prop='name';

//console.log(person.prop);
console.log(person[prop]);
















