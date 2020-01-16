function threenum(...args){
	if (args.length < 3){
        return function(...args2){
            if(args2.length < 2){
                return function(arg3){
                    return args[0]+args2[0]+arg3;
                }
            }
            return args[0]+args2[0]+args[1];
        });
    }
    return args[0] +args[1]+args[2];
}
module.exports = threenum;