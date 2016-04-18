// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 
// every time it executes. Use console.log() to output the value of the counter variable each time through the loop.
// stop execution of the loop if the counter variable's value is greater than 120.
for (var i = 5; i < 120; i+=10) {
	console.log("increment by 10: ", i);
};
// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the 
// counter variable's value by 2. Use console.log()  to output its value every time. When the counter 
// variable's value is 1, stop execution.
for (i = Math.floor(4096); i > 0; i /= 2) {
	console.log("Divide by 2:", Math.floor(i));
};
// Create an array that contains the names of American Presidents. Loop over that array with a for loop,
// and use string concatenation with console.log() to output the order and name of each President
var presidents = ["washington", "jackson", "lincoln"];
for (var p = 0; p < presidents.length; p++) {
	presidents[p];
	// console.log("president", presidents[p]);
	var stringCat = presidents.join();
	console.log("concatanate: ", stringCat);
};
// you can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() 
// to output the names of the keys in the object.
var antSpecies = {
  "argentine": {},
  "army": {},
  "big headed": {},
  "black": {},
  "bull": {},
  "carpenter": {},
  "crazy": {},
  "fire": {},
  "glider": {},
  "honey pot": {},
  "jack jumper": {}
}

    
for (var prop in antSpecies) {
  console.log(prop);
}
