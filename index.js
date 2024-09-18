const EventEmmiter = require('node:events');

const emitter = new EventEmmiter();

emitter.on("order-pizza", (size, topping) => {
    console.log(`${size} pizza ordered with ${topping}`);
});

emitter.on('order-pizza', size => {
    if (size === 'large') {
        console.log('comes with complimentary drink');
    }
});

emitter.emit('order-pizza', "large", 'mushroom');

