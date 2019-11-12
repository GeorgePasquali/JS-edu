const hapi = require('hapi');
const routes = require('./routes');

const startServer = async () => {
    try {
        const hapiServer = new hapi.Server({
            host: 'localhost',
            port: 5000,
            routes: {
                cors: true
            }
        });

        await hapiServer.route(routes);
        await hapiServer.start();
        console.log(`Server running at: ${hapiServer.info.uri}`);
    } catch (err) {
        console.log("Startup error: ", err);
    }

}

startServer();