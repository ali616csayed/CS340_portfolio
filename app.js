// App.js

/*
    SETUP
*/
const express = require('express');   // We are using the express library for the web server
const app = express();            // We need to instantiate an express object to interact with the server in our code
const PORT = 7575;                 // Set a port number at the top so it's easy to change in the future
app.use(express.urlencoded({
    extended: false
}));

/*
    ROUTES
*/
app.use(express.static('public'));


/*
    LISTENER
*/
app.listen(PORT, function () {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});
