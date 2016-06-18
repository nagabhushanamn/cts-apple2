/**
 * http://usejsdoc.org/
 */
function init(){
	

	var trainer = {
		name : 'Nag',
		doTeach : function() {
			console.log(this.name + " teaching JS..");

			var self=this;
			function learn() {
				console.log(this.name +' learning JS from ' + self.name);
			}

			// learn();

			return learn;

		}
	};

	var learnFunc = trainer.doTeach();

	var emp1 = {
		name : 'Namith'
	};

	learnFunc.call(emp1);
	
}

init();