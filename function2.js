"use strict";
let myName = "Peter";
let petType = "cat";
let petName = "Mandu";

function presentPet(firstName, animalType, animalName) {
  console.log(
    ` My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}
presentPet(myName, petType, petName);
