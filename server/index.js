var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();


var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


mongoose.connect('mongodb://localhost/trainers');
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


// define models =================
var Trainer = mongoose.model('Trainer', {
    name : String,
    email : String,
    phone : String
});

// API routes ======================================================================

// get all trainers
app.get('/api/trainers', function(req, res) {
    Trainer.find(function(err, trainers) {
        if (err)
            res.send(err)
        res.json(trainers); 
    });
});

// get a trainer
app.get('/api/trainer/:id', function(req, res) {
    Trainer.findById(req.params.id, function(err, trainers) {
        if (err)
            res.send(err);
        res.json(trainers);
    });
});

// create trainer and send back all trainers after creation
app.post('/api/trainers', function(req, res) {
    Trainer.create({
        name : req.body.name,
        done : false
    }, function(err, trainer) {
        if (err)
            res.send(err);
        Trainer.find(function(err, trainers) {
            if (err)
                res.send(err)
            res.json(trainers);
        });
    });

});

var staticRoot = __dirname + '/';
app.set('port', (process.env.PORT || 3000));
app.use(express.static(staticRoot));
app.use(function(req, res, next){

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html'){
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }
    fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});