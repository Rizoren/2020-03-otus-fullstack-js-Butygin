let usersArr = [
    {id: 1, login: 'admin', email: 'password', role: 'ADMIN'},
    {id: 2, login: 'seller', email: 'sellerPass', role: 'SELLER'},
    {id: 3, login: 'buyer', email: 'buyerPass', role: 'BUYER'}
];

let productsArr = [
    {id: 1, name: 'Name 1', description: '', price: 99.99, volume: 100},
    {id: 2, name: 'Name 2', description: '', price: 199.99, volume: 100},
    {id: 3, name: 'Name 3', description: '', price: 299.99, volume: 100},
    {id: 4, name: 'Name 4', description: '', price: 399.99, volume: 100},
    {id: 5, name: 'Name 5', description: '', price: 199.99, volume: 100},
    {id: 6, name: 'Name 6', description: '', price: 299.99, volume: 100},
    {id: 7, name: 'Name 7', description: '', price: 499.99, volume: 100},
    {id: 8, name: 'Name 8', description: '', price: 499.99, volume: 100},
    {id: 9, name: 'Name 9', description: '', price: 99.99, volume: 100},
    {id: 10, name: 'Name 10', description: '', price: 199.99, volume: 100}
];

let promoArr = [
    {id: 1, name: 'Sell 20', description: 'Discount 20%', priceModify: 20, products: [
            {id: 1, name: 'Name 1', description: '', price: 99.99, volume: 20},
            {id: 2, name: 'Name 2', description: '', price: 199.99, volume: 20},
            {id: 3, name: 'Name 3', description: '', price: 299.99, volume: 20},
            {id: 4, name: 'Name 4', description: '', price: 399.99, volume: 20},
            {id: 5, name: 'Name 5', description: '', price: 199.99, volume: 20}
        ]}
];

let cartArr = [
    {user: {id: 3, login: 'buyer', email: 'buyerPass', role: 'BUYER'}, products: [
            {id: 1, name: 'Name 1', description: '', price: 99.99, volume: 1},
            {id: 2, name: 'Name 2', description: '', price: 199.99, volume: 2},
            {id: 3, name: 'Name 3', description: '', price: 299.99, volume: 1},
            {id: 4, name: 'Name 4', description: '', price: 399.99, volume: 3},
            {id: 5, name: 'Name 5', description: '', price: 199.99, volume: 1}
        ]}
];

let favArr = [];

let compArr = [];

module.exports.usersArr = usersArr;
module.exports.productsArr = productsArr;
module.exports.promoArr = promoArr;
module.exports.cartArr = cartArr;
module.exports.favArr = favArr;
module.exports.compArr = compArr;