/**
 * http://usejsdoc.org/
 */

(function() {

	// create module
	var mod = angular.module('store', []);

	// -----------------------------------------------------
	// M -> Model ( data ) , usually loaded from server-side
	var items = [ {
		name : 'Laptop',
		price : 198000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now()
	}, {
		name : 'Mobile',
		price : 19000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount:1000
	} ];
	// -----------------------------------------------------

	// using DOM

	// document.querySelector('h3').innerHTML=item.name;
	// document.querySelector('h4').innerHTML=item.price;
	// document.querySelector('p').innerHTML=item.desc;

	//	$(document).ready(function() {
	//		// using jQuery
	//		$('h3').text(item.name);
	//		$('h4').text(item.price);
	//		$('p').text(item.desc);
	//	});

	/*
	 *  limitation:
	 *  
	 *  --> View coupled in JS
	 *  --> DOM manipulation with plain-JS difficult.
	 *  --> no automatic data-binding ..
	 */

	// -----------------------------------------------------
	// Controller
	mod.controller('StoreController', function($filter) {
		// load data from server-side
		// this.product=item;
		// this.products = items;
		this.products=$filter('orderBy')(items,"price",true);
		console.log($filter('uppercase')('nag'));
		console.log($filter('priceDiscount')(1000,100));
	});

	// -----------------------------------------------------

	//	Filter

	mod.filter('priceDiscount', function() {
		return function(originalPrice, discount) {
			if (angular.isNumber(originalPrice)) {
				if (discount) {
					return originalPrice - discount;
				} else {
					return originalPrice - 1;
				}
			} else {
				throw new Error('invalid price');
			}
		};
	});

})();