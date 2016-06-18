/**
 * http://usejsdoc.org/
 */

/*
 * 	A closure is a function having access to the parent scope, 
 * even after the parent function has closed.

 * 
 *  use or why we need ?
 *  
 *  --> to expose public-behav ( closure ) of any module.
 *  --> to execute any function asynch.
 * 
 */

function tng(sub) {
	console.log('tng on ' + sub);
	var notes = 'js-notes...';
	var v=100;
	
	function learn() {
		console.log('learning ' + sub + " with " + notes);
	}

	console.log('tng end....');
	
	return learn;
}

var learnFunc=tng('js');
learnFunc();