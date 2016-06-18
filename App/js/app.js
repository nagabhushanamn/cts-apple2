/**
 * http://usejsdoc.org/
 */
//
//document.addEventListener('DOMContentLoaded', function(e) {
//
//	console.log('dom ready..');
//
//	if (window.addEventListener) {
//		var box = document.querySelector('.jumbotron');
//		var hideBtn = document.querySelector('.btn-danger');
//		var showBtn = document.querySelector('.btn-success');
//
//		hideBtn.addEventListener('click', function(e) {
//			box.style.display = 'none';
//		}, false);
//
//		showBtn.addEventListener('click', function(e) {
//			box.style.display = 'b';
//		}, false);
//	}
//	if (window.attachEvent) {
//
//	}
//
//});

$(document).ready(function() {
	
	var $box=$('.jumbotron');
	
	$('.btn-danger').click(function(e) {
		$box.hide();
	});
	$('.btn-success').click(function(e) {
		
		$box.show();
	});
	
	//-------------------------------------
		
	//	var name="";
	//	
	//	var $nameField=$('#nameField');
	//	var resetBtn=$('#resetBtn');
	//	var getNameBtn=$('#getNameBtn');
	//	var nameSpan=$('.badge');
	//	
	//	function applyBinding(){
	//		$nameField.val(name);
	//		nameSpan.text(name);
	//	}
	//	
	//	applyBinding();
	//	
	//	$nameField.on('keyup', function(e) {
	//		name=$(this).val();
	//		applyBinding();
	//	});
	//	
	//	resetBtn.on('click', function(e) {
	//		name='';
	//		applyBinding();
	//	});
	//	getNameBtn.on('click', function(e) {
	//		name='Nagabhushanam';
	//		applyBinding();
	//	});
		
	
	
});


//--------------------------------------


// loadData from server  ( Model )
var user={name:'guest'};



// ViewModel

function UserViewModel(name){
	this.name=ko.observable(name);
	this.reset=function(){
		this.name('');
	}
	this.getName=function(){
		this.name('Nagabhushanam');
	}
}
var vm=new UserViewModel(user.name);

ko.applyBindings(vm);












