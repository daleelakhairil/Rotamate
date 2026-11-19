const housemates = [
{name: "Alex", paid: 90}, //name and paid is an object, in a curly braces is an object
{name: "Sam", paid: 60}, // the bracket itself is an object, an ordered list of things
{name: "Jo", paid: 0},
{name: "Mia", paid: 0}
];

let total1 = 0;
for (const person of housemates) {
    console.log(person.name, "paid", person.paid);
    total1 = total1 + person.paid;
}

const share = total1 / housemates.length;
console.log(housemates.length);

let netTotal = 0;
for (person of housemates) {
    net = person.paid - share;
    netTotal = netTotal + net;
}

console.log("Total", total1);
const share1 = total1 / housemates.length;
console.log("Fair share each: ", share1);
console.log("Sum of Net: ", netTotal);