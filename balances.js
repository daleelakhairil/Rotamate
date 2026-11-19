const alexPaid = 90;
const samPaid = 60;
const joPaid = 0;

const total = alexPaid + samPaid + joPaid
const share = total / 3;

console.log("Total money owed: ", total);
console.log("Fair share each: ", share);
console.log("Alex net: ", alexPaid - share);
console.log("Sam net: ", samPaid - share);
console.log("Jo's Next", joPaid - share);

// look at the label in your code, every person has their own variable.
// so, if someone moves out, you have to edit it every single time
//there's a better way which is "arrays and objects" where we describe the house as data

const housemates = [
{name: "Alex", paid: 90}, //name and paid is an object, in a curly braces is an object
{name: "Sam", paid: 60}, // the bracket itself is an object, an ordered list of things
{name: "Jo", paid: 0},
{name: "Mia", paid: 0}
];

console.log(housemates[0].name);
console.log(housemates[0].paid);
console.log(housemates.length)
console.log("Sum of nets: ", (alexPaid - share) + (samPaid - share) + (joPaid - share));

// now we are still writing all names, byt a loop repeats code for every item in an array
let total1 = 0;
for (const person of housemates) {
    console.log(person.name, "paid", person.paid);
    total1 = total1 + person.paid;
}

console.log("Total", total1);
const share1 = total1 / housemates.length;
console.log("Fair share each: ", share1);

// now we are doing net balances with a loop

let netTotal = 0;

for (const person of housemates) {
    const net = person.paid - share1;
    netTotal = netTotal + net;
}

console.log("Sum of Net: ", netTotal);

// Now we are learning about function
// function is when we know that we are going to use the method a lot of times

function calculateNets(housemates) {
    let total2 = 0;
    for ( person of housemates ) {
        total2 = total2 + person.paid;
    }

    const share2 = total2 / housemates.length;

    const results = [];
    for (const person of housemates) {
        results.push({name: person.name, net: person.paid - share2})
    }

    return results;

}

console.log("This", calculateNets);
const nets = calculateNets(housemates);
console.log("This", nets)

const rumahDaleela =[
{name: "Daleela", paid: 0},
{name: "Farah", paid: 180},
{name: "Jiha", paid: 0},
{name: "riena", paid: 0},
{name: "hani", paid: 0},
{name: "Nurin", paid: 0}
]

console.log(rumahDaleela[1]);

const bayaranBalik = calculateNets(rumahDaleela);

penghutang = [];
for (const person of bayaranBalik) {
    //if (person.calculateNets < 0) { //here there is a bug because im using a name that did not exist
    // look at what calculateNets return, so since it will return { name: 'Alex', net: 52.5 },
    if (person.net < 0) {
    //penghutang.add(person.names); add is not an array method, push is an array method
    penghutang.push(person);
    }
}

console.log("ni la penghutangnya", penghutang)

dihutang = [];
for (const person of bayaranBalik) {
    if (person.net > 0) {
        dihutang.push(person);
    }
}

const debtors = [];
for (const person of penghutang) {
    debtors.push({name: person.name, amount: -(person.net)})
}

const creditors = [];
for (const person of dihutang) {
    creditors.push({name: person.name, amount: person.net})
}

function settleUp(debtors, creditors) {
    const payments = [];
    let d = 0; // this is debtor
    let c = 0; // this is my creditor

    while (d < debtors.length && c < creditors.length) {

        const amount = Math.min(debtors[d].amount, creditors[c].amount)
        payments.push({from : debtors[d].name, to: creditors[c].name, amount: amount});

        debtors[d].amount = debtors[d].amount - amount;
        creditors[c].amount = creditors[c].amount - amount;

        if (debtors[d].amount === 0) {
            d = d + 1;
        }

        if (creditors[c].amount === 0 ) {
            c = c + 1;

        }
    }
    return payments;
}

const results = settleUp(debtors, creditors);
console.log("this is the payments log", results);







