const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./schema.js');


app.use('/graphql', expressGraphQL({
    svhema: schema,
    graphiql: true
}))

app.listen(4000, ()=>{
    console.log('Running on port no 4000');
})