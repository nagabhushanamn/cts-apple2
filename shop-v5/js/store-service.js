/**
 * http://usejsdoc.org/
 */

(function() {

	var mod = angular.module('store-service', []);

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

})();