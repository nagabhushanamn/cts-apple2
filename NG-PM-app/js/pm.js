/**
 * http://usejsdoc.org/
 */

(function() {

	var pm = angular.module('pm', [ 'ui.router','ngResource' ]);
	
	

	pm.run(function($rootScope) {
		$rootScope.$on('$stateChangeSuccess', function(event, toState,toParams, fromState, fromParams) {
			//console.log('$stateChangeSuccess..');
			$rootScope.message=fromState.message;
		});
	});
	
	pm.config(function($stateProvider,$urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
		.state('home',{url:'/',templateUrl: "templates/pm-home.html"})
		.state('all_elec', {
			url : '/view-all-elec',
			templateUrl : "templates/pm-grid.html",
			resolve:{
				prodType:function(){
					return "elec";
				},
				items:function(Product){
					return Product.query();
				}
			},
			controller : 'ViewAllController'
		})
		.state('all_other', {
			url : '/view-all-other',
			resolve:{
				prodType:function(){
					return "other";
				},
				items:function(Product){
					return [];
				}
			},
			templateUrl : "templates/pm-grid.html",
			controller : 'ViewAllController'
		})
		.state('new',{url:'/add-new',templateUrl: "templates/pm-product-form.html",controller: 'AddNewController'})
		.state('all_elec.edit', {
			url : '/edit-product/:prodId',
			views:{
				'edit':{templateUrl: "templates/pm-product-form.html",controller: 'ViewAndUpdateController'},
				'read':{templateUrl: "templates/pm-product-view.html",controller: 'ViewAndUpdateController'}
			}
		})
		.state('all_elec.view', {
			url : '/view-product/:prodId',
			views:{
				'read':{templateUrl : "templates/pm-product-view.html",controller : 'ViewAndUpdateController'}
			}
		});

	});
	
	
	//-----------------------------------------------------------------------------
	
	pm.controller('ViewAllController', function($scope,Product,$state,prodType,items) {
		
		console.log(prodType);
		
		$scope.products=items;
		
		$scope.remove=function(id){
			Product.remove({prodId:id},function(item){
				$state.reload();
			});
		};
		
	});
	
	
	pm.controller('ViewAndUpdateController', function($scope,$location,$state,$stateParams,Product) {
		if($stateParams.prodId){
			Product.get({prodId:$stateParams.prodId},function(item){
				$scope.product=item;
			});
		}
		
		$scope.save=function(){
			Product.update($scope.product,function(){
				//$location.path('view-all');
				$state.reload();
			});
		};
		
	});
	
	
	
	pm.controller('AddNewController', function($scope,Product,$location,$state) {
		$scope.product={};
		$scope.save=function(){
			var newProduct=new Product();
			angular.extend(newProduct, $scope.product);
			newProduct.make=Date.now();
			newProduct.$save(function(item){
				//console.log('new product saved....');
				$scope.product={};
				//$location.path('view-all');
				$state.current.message="New Product saved...";
				$state.go('all_elec');
			});
		};
	});
	
	
	pm.factory('Product', function($resource) {
		var url="http://localhost:3000/api/products/:prodId";
		var Product=$resource(url,{prodId:'@id'},{'update': { method:'PUT' }});
		return Product;
	});
	
	
	

})();