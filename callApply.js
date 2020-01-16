function callApply(func, obj, ...param){
	func.apply(obj, param);
}

module.exports = callApply;