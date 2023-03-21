"use strict"

let parm = "første værdi"

function myFunc(parm) {
    console.log(parm);
    // første værdi
    console.log(parm);
    // første værdi
parm = "en ny værdi"
console.log(parm)
// ny værdi
}
myFunc(parm);
console.log(parm);
// første værdi

