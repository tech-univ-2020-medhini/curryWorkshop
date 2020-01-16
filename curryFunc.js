function curryDemo(func){
	const argLength = func.length;
	return function curried(...args){
		if(args.length === argLength){
			return func(...args);
		}
		else{
			return curried.bind(null, ...args);
		}
        
	};
}

module.exports = curryDemo;