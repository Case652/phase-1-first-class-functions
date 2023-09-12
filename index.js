                //did this in class? day 1?
//receivesAFunction 
    //take a callback function as an argument
    //call the callback function
    //it doesn't matter what this function returns, so long as it calls the callback function
function Me() {
    console.log(`im lost`)
}
function receivesAFunction(callback) {
    const somthing = callback(Me)
}
//returnsANamedFunction
    //take no arguments
    //return a named function
function returnsANamedFunction() {
    return Me
}
//returnsAnAnonymousFunction
    //take no arguments
    //return an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        
    }
};