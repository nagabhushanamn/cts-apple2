/**
 * http://usejsdoc.org/
 */

/*
 * 
 * UnitTest ===> AAA
 * 
 * A --> Arrange A --> Act A --> Assert
 * 
 * 
 */

describe('CalcCtrlTest suite', function() {

	beforeEach(module('calc'));

	var $controller;
	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	var scope;
	beforeEach(function() {
		scope = {};
		$controller('CalcController', {
			$scope : scope
		});
		scope.first = 1;
		scope.second = 2;
	});

	it('1+2=3', function() {
		scope.doArith();
		expect(3).toBe(scope.latest);
	});
	it('1-2=-1', function() {
		scope.operator = "-";
		scope.doArith();
		expect(-1).toBe(scope.latest);
	});
	it('1*2=2', function() {
		scope.operator = "*";
		scope.doArith();
		expect(2).toBe(scope.latest);
	});
	it('1/2=0.5', function() {
		scope.operator = "/";
		scope.doArith();
		expect(0.5).toBe(scope.latest);
	});

});