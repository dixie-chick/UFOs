//---- 11.4.1-----

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// start loop at begging by assigning iteratable (i) as zero wit var i=0
function listLoop(userList) {
   for (var i = 0; i < userList.length; i++) {
     console.log(userList[i]);
   }
}

// Print it out
listLoop(friends);

//---- 11.4.2----
// create array
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// create for loop
//increase iterable (i) by adding 1 with i++
for (var i = 0; i < vegetables.length; i++) {
    // print each item in array with a message
    console.log("I love " + vegetables[i]);
}

// Exersice 3 Loop through numbers WITHOUT using an array
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }