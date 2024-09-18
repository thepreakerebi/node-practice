const EventEmmiter = require('node:events');
const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const drinkMachine = new DrinkMachine();

const pizzaShop = new PizzaShop();


pizzaShop.on('order', (size, topping) => {
    console.log(`${size} pizza ordered with ${topping}`);
    drinkMachine.serveDrink(size);
})

pizzaShop.order('medium', 'mushroom');
pizzaShop.displayOrderNumber();

// const emitter = new EventEmmiter();

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`${size} pizza ordered with ${topping}`);
// });

// emitter.on('order-pizza', size => {
//     if (size === 'large') {
//         console.log('comes with complimentary drink');
//     }
// });

// emitter.emit('order-pizza', "large", 'mushroom');

