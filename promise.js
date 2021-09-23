const makeCard = (name) => {
    name && console.log(`You order for ${name} has been submitted`);
    //return new Promise(cardGenerator);
}

let names = ['Hamsa', 'Chris', 'Bob'];
//let names = ['beth'];

/*const cardGenerator = (res, rej) => {
    if (names.length > 1) {
        let event = 'Birthday';
        res(event);
    } else {
        rej('Please provide a name');
    }
}*/

const incompleteOrder = (issue, name) => {
    console.log(`You order for ${name} could not be completed due to: ${issue}`)
}

const successfulOrder = (name, event) => {
    console.log(`Your order for ${name} of type ${event} was completed`);
}

/*for (let name of names) {
    makeCard(name)
        .then(event => successfulOrder(name, event))
        .catch(err => {
            incompleteOrder(err, name)
        })
}*/

makeCard();

module.exports = {
    makeCard, incompleteOrder, successfulOrder
}