/**
 * http://usejsdoc.org/
 */

//
//
//function init(){
//	
//	var count=0;  // private
//	
//	// public
//	return{
//		doCount:function(){
//			count++;
//		},
//		getCount:function(){
//			return count;
//		}
//	};
//	
//}
//
//var counter=init();

//------------------------------

// pattern : IIFE or self-executable func


var counter=(function(){
	
		
	var count=0;  // private
	
	// public
	return{
		doCount:function(){
			count++;
		},
		getCount:function(){
			return count;
		}
	};
	
	
})();

//------------------------------



counter.doCount();
counter.doCount();
counter.doCount();

//count=-10;  // un-expected init..

console.log(counter.getCount());
