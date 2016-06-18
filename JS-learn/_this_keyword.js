/**
 * http://usejsdoc.org/
 */

//var name="GLOBAL";
//
//function sayNameForAll(){
//	console.log('im '+this.name);
//}

//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};

//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};

//sayNameForAll();// im ??   // function-invocation pattern ( this --> global-obj  )
//p1.sayName();   // im Nag  // method-invocation pattern   ( this --> invoker-obj )
//p2.sayName();   // im Ria


//---------------------------------------------

// Dynamic Method-binding

var p1={name:'Nag'};
var p2={name:'Ria'};


var greetUtil={
		sayName:function(message,from){
			console.log(message+' im '+this.name+" - "+from);
		},
		sayAge:function(message){
			console.log(message);
		}
};

//a.eager invocation

//greetUtil.sayName.call(p1,"Hello","BLR");
//greetUtil.sayName.call(p2,"Hi","CHN");
//greetUtil.sayAge.call(p1,"i dont know");
//
//greetUtil.sayName.apply(p1, ["Hello","IND"]);


//b.lazy invocation on event


var newF=greetUtil.sayName.bind(p1);

/*
 * function bind(obj){
 * 
 *  function f(){
 *  this.call(obj);
 *  }
 *  
 *  return f;
 * 
 * }
 * 
 */

greetUtil.sayName=null;
	
// greet-event on p1
newF("Hello","BLR");

//-------------------------------------------

// constructor func

function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
}


var p1=new Person('Nag', 32);  // constructor invocation ( this --> new-obj )
p1.sayName();


//-------------------------------------------


/*
 *  JS , can invoke function in 4 ways
 *  
 *  1. function-invocation         ( this --> global )
 *  2. method-invocation   ( static - binding ) ( this ---> invoker-obj )
 *  3. call,apply and bind invocation ( dynamic - binding ) ( this --> arg-obj )
 *  3. constructor invocation  ( this --> new-obj )
 * 
 */

















