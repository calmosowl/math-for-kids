'use strict';
document.addEventListener("DOMContentLoaded", (ev) => {
	(()=>{
let log = document.getElementById('log');
function getLog(msg) {
    log.textContent += msg + "\n";
    var ot = log.scrollHeight - log.clientHeight;
    if (ot > 0) log.scrollTop = ot;
}

var math = new MathMashine({
	min: 0,
	max: 20
});


getLog(math.data.nums);
getLog(math.data.result);

console.dir(math);

let example = document.querySelectorAll('.example');
example = Array.prototype.slice.call(example);



// example.forEach(function(example) {
//     console.log( example );
// });

/*==========================*/
// for (var i = 0; i < example.length; i++) {
//     example[i].children[0].setAttribute('data-num', getRandomArbitary(0, 10));
//     example[i].children[0].textContent = Math.abs(+example[i].children[0].getAttribute('data-num'));
//     example[i].children[2].setAttribute('data-num', getRandomArbitary(0, -10));
//     example[i].children[2].textContent = Math.abs(+example[i].children[2].getAttribute('data-num'));
//     if(+example[i].children[2].getAttribute('data-num') > 0)
//     	example[i].children[1].textContent = "+";
//     else example[i].children[1].textContent = "-";
//     var result = +example[i].children[0].getAttribute('data-num') + +example[i].children[2].getAttribute('data-num');
//     example[i].children[4].setAttribute('result', result);
// }
/*=========================*/


})();
}, false);

function MathMashine(options){
	let that = this;
	this.max = options&&options.max ? options.max: 10;
	this.min =  options&&options.min ? options.min: 0;
	this.numsPrototype = [0,0];
	this.data = {
		nums: [],
		octothorpe: '',
		result: 0,
		stamp: []
	};

	function random(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1)
		rand = Math.round(rand);
		return rand;
	}

	function returnThis() {
    	var operator = Math.floor(Math.random() * arguments.length);
    	var operatorSign = arguments[operator];
    	return operatorSign;
	}
	
	function getStamp(obj) {
  		for (var key in obj) {
			that.data.stamp.push( obj[key] );
		}
    return that.data.stamp;
}

	this.data.nums = this.numsPrototype.map(function(item) {
  		return item = random(that.min, that.max);
	});

	this.data.octothorpe = returnThis("+", "-");
	
	this.data.result = this.data.nums.reduce(function(sum, current) {
  		return sum + current;
	});

	getStamp(this.data);
}

/*O_O_O_O_O*/

function isPositive(number) {
  return number > 0;
}