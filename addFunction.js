function addNumbers(a,b){
    if(a == null || b == null || typeof a !== "number" || typeof b !== "number"){
        return
    }
    return a+b
}


console.log(addNumbers(3,4))


function addAndReturnModulus(a,b){
    if(a == null || b == null || typeof a !== "number" || typeof b !== "number"){
        return
    }
    return Math.abs(a+b)
}

