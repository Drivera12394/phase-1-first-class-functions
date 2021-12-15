function receivesAFunction(callback){
    callback();
}

const returnsANamedFunction = function namedfunction() {
    return namedfunction;
}

const returnsAnAnonymousFunction = function() {
    return returnsAnAnonymousFunction();
}