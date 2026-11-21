const { calculateNets, settleUp } = require("./logic.js");

const rumahDaleela = [
  { name: "Daleela", paid: 0 },
  { name: "Farah", paid: 180 },
  { name: "Jiha", paid: 0 },
  { name: "Riena", paid: 0 },
  { name: "Hani", paid: 0 },
  { name: "Nurin", paid: 0 },
];

const bayaranBalik = calculateNets(rumahDaleela);

const penghutang = [];
for (const person of bayaranBalik) {
  if (person.net < 0) {
    penghutang.push(person);
  }
}

const dihutang = [];
for (const person of bayaranBalik) {
  if (person.net > 0) {
    dihutang.push(person);
  }
}

const debtors = [];
for (const person of penghutang) {
  debtors.push({ name: person.name, amount: -person.net });
}

const creditors = [];
for (const person of dihutang) {
  creditors.push({ name: person.name, amount: person.net });
}

const results = settleUp(debtors, creditors);
console.log("this is the payments log", results);

