const { makeCard, incompleteOrder, successfulOrder } = require('./promise');

let names = ['Hamsa', 'Chris', 'Bob'];

const cardGenerator = async (name) => {
    try {
        let submit = await makeCard(name);
        let event = 'birthday';
        successfulOrder(name, event);
    } catch (err) {
        incompleteOrder(err, name)
    }
}

for (let name of names) {
    cardGenerator(name)
}