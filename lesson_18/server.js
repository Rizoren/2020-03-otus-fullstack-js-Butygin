const { join } = require('path');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const { productsArr, usersArr, promoArr, cartArr } = require('./storege.js');

// Load schema from the file
const schema = loadSchemaSync(join(__dirname, './schema.graphql'), {
    loaders: [
        new GraphQLFileLoader(),
    ]
});

// Write some resolvers
const resolvers = {
    Query: {
        user(id) {
            return usersArr.filter(({id})=> id == id)[0];
        },
        userList() {
            return usersArr;
        },
        product(id) {
            return productsArr.filter(({id})=> id == id)[0];
        },
        productList() {
            return productsArr;
        },
        promo(id) {
            return promoArr.filter(({id})=> id == id)[0];
        },
        promoList() {
            return promoArr;
        },
        cart(login) {
            return cartArr.filter(({login})=> login == login)[0];
        }
    }
};

// Add resolvers to the schema
const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
});

const app = express();
app.use('/graphql',
    graphqlHTTP({
        schema: schemaWithResolvers,
        graphiql: true,
    })
);
app.listen(4000, () => {
    console.info(`Server listening on http://localhost:4000/graphql`)
});
