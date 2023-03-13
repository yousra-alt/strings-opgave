"use strict";

const tekst = "Mit navn er Yousra";
console.log(tekst);

const startIndex = tekst.lastIndexOf(" ")+1;
console.log(startIndex);
// beregning af hvor navnet starter. start af sidste mellemrum.

const slutIndex = tekst.length;
console.log(slutIndex);


const myNameIs = tekst.substring(startIndex,slutIndex)
console.log(myNameIs);

