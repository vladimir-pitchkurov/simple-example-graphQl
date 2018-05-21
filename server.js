var express = require('express');
var graphql = require('express-graphql');
var schema = require('./data/schema');

var graphQL2 = require('graphql');

var app = express();

app.use('/graphql', graphql({ schema:schema, pretty:true }));

app.listen('3000', function () {
    console.log('server started');
});

   /*variant 2:*/

   var query = '{user(id:"3"){id,name,}}';

   graphQL2.graphql(schema, query)
       .then(
           function (result) {
               console.log(result);
           }
       );
