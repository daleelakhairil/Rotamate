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

function settleUp(debtors, creditors) {
    const payments = [];
    let d = 0;
    let c = 0;

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

module.exports = { calculateNets, settleUp };



