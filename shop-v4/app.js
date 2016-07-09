/**
 * http://usejsdoc.org/
 */

(function() {

	// create module
	var mod = angular.module('store', [ 'jcs-autoValidate' ]);

	// -----------------------------------------------------

	// Service(s)

	mod.factory('storeService', function($http, $q) {
		var url = "products.json";
		var service = {
			loadAll : function() {
				var defer = $q.defer();
				// communicate with server-side thru AJAX call
				var promise = $http.get(url)
				promise.then(function(resp) {
					var items = resp.data;
					defer.resolve(items);
				}, function(reason) {
					defer.reject(reason);
				});

				return defer.promise;
			}
		};

		return service;

	});

	// -----------------------------------------------------
	// Controller(s)
	mod.controller('StoreController', function($scope,storeService) {
		var promise = storeService.loadAll();
		var self=this;
		promise.then(function(items) {
			self.products=items;
		}, function(reason) {
			$scope.reason=reason;
		});
	});

	mod.controller('TabsController', function($scope) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(index) {
			$scope.tab = index;
		};
		$scope.isTabSelected = function(index) {
			return $scope.tab === index;
		};
	});

	// -----------------------------------------------------

	// Filter

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

	// -------------------------------------------------------

	// Directives

	mod.directive('productTitle', function() {
		return {
			restrict : "E",
			replace : true,
			templateUrl : "templates/product-title.html",
			link : function(scope, ele, attr) {
				ele.on('mouseenter', function(e) {
					ele.css('background-color', '#def');
				});
				ele.on('mouseleave', function(e) {
					ele.css('background-color', '#fff');
				});
			}
		};
	});
	mod.directive('productTabs', function() {
		return {
			restrict : "E",
			templateUrl : "templates/product-tabs.html",
			controller : "TabsController"
		};
	});
	mod.directive('productReviewForm', function() {
		return {
			restrict : "E",
			templateUrl : "templates/product-review-form.html",
			controller : function($scope) {
				$scope.newReview = {};
				$scope.addNewReview = function(product) {

					// if valid

					// send form-data to server-side with product.id ( future
					// task )

					product.reviews.push($scope.newReview);
					$scope.newReview = {};

					$scope.reviewForm.$setPristine();
				};
			}
		};
	});
	mod.directive('productImage', function() {
		return {
			restrict : "E",
			templateUrl : "templates/product-image.html"
		};
	});

	mod.directive('datePicker', function() {
		return {
			restrict : 'A',
			link : function(scope, ele, attr) {
				// ele.datepicker();
			}
		};
	});

	// -------------------------------------------------

})();