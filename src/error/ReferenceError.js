function ReferenceError(reference){
    this.name = "ReferenceError";
    this.message = reference+" is not defined";
    var error = new Error();
    error.message = this.message;
    this.stack = error.stack;
}

ReferenceError.prototype = Object.create(Error.prototype);
ReferenceError.prototype.constructor = ReferenceError;

try{
    throw new ReferenceError(this.message);
}
catch(e) {
    console.log(e.message);
}