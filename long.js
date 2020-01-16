let total = 0;
function long(arg){
	if (typeof arg === 'undefined'){
		return total;
	}
	else if (typeof arg === 'number'){
		total = total+arg;
		return long;
	}
}

module.exports = long;