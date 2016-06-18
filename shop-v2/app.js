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
		make : Date.now(),
		images:[
		        {thumb:'images/Laptop.png',full:''},
		        {thumb:'images/Laptop.png',full:''}
		        ],
		reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'Goood...'},
		         {stars:3,author:'indu@gmail.com',comment:'too costly...'}
		         ]        
	}, {
		name : 'Mobile',
		price : 19000,
		desc : 'New Model',
		canBuy : true,
		notAvailable : false,
		make : Date.now(),
		discount:1000,
		images:[
		        {thumb:'images/Mobile.png',full:''},
		        {thumb:'images/Mobile.png',full:''}
		        ],
        reviews:[
		         {stars:5,author:'nag@gmail.com',comment:'Goood...'},
		         {stars:3,author:'indu@gmail.com',comment:'too costly...'}
		         ]         
	} ];
	
	// -----------------------------------------------------
	// Controller
	mod.controller('StoreController', function($filter) {
		this.products=$filter('orderBy')(items,"price",true);
	});

	mod.controller('TabsController', function($scope) {
		$scope.tab=1; // ng-init="tab=1"
		$scope.changeTab=function(index){
			$scope.tab=index;
		};
		$scope.isTabSelected=function(index){
			return $scope.tab===index;
		};
	});
	mod.controller('ReviewFormController', function($scope) {
		$scope.newReview={};
		$scope.addNewReview=function(product){
			
			// if valid
			
			// send form-data to server-side with product.id ( future task )
			
			product.reviews.push($scope.newReview);
			$scope.newReview={};
		};
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