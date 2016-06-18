/**
 * http://usejsdoc.org/
 */

"use strict";

// to know property existence
// var person = {
// name : 'Nag'
// };

/*
 * JS- falsy values
 * 
 * 
 * false o null undefined ""
 * 
 * 
 */

// way-1
// if (person.name) {
// console.log("name property exist in person");
// }
//
// // way-2
//
// if("name" in person){
// console.log("name property exist in person");
// }
// -------------------------------------

//var person = {
//	name : 'Nag',
//	age : 32
//};
//
//Object.defineProperty(person, 'age', {enumerable:false});
//
//for ( var prop in person) {
//	if (person.hasOwnProperty(prop)) {
//		console.log(prop + " : " + person[prop]);
//	}
//}

//-----------------------------------------



//var person = {
//	name : 'Nag',
//	age : 32
//};
//Object.defineProperty(person, 'name', {configurable:false,writable:false});
//
////delete person.name;
////console.log(person.name);
//
//
//person.name="";
//console.log(person.name);

//-----------------------------------------

var person = {
name : 'Nag',
age : 32
};

//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);

//person.newProp="value";
//delete person.name;

//-----------------------------------------


/*
 *   JS , can have 2 types of properties
 *   
 *   
 *   1. data properties
 *   2. accessor property
 * 
 * 
 */


var person={
		_name:'Nag',  // data property
		set name(newName){
			console.log('setting newName');
			if(newName){
				this._name=newName;
			}
		},
		get name(){
			return this._name;
		}
};

person.name="New Nag"; // write
console.log(person.name); // get






















