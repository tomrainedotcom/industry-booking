const Hapi = require('hapi');
const Good = require('good');

//create a basic hapi server
const server = new Hapi.Server();
server.connection({ port: 8000 });


server.register(require('inert'), function(err){
    if(err){
        throw err;
    }

    //root of api
    server.route({
        method: 'GET',
        path: '/api',
        handler: function(req, res){
            res({'api': 'hello world'});
        }
    });

    //root of public site
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    });
});


server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function(err){
    if(err){
        throw err; //something bad happend loading the plugin
    }
    server.start(function(){
        console.log('Listening to port 8000')
    });
});

