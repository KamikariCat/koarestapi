const Koa = require('koa');

const app = new Koa();

const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const Routes = require('./src/routes/index');

app.on('error', (err, ctx) => {
    console.log('server error', err, ctx)
});

app.use(bodyParser());
app.use(cors());
Routes.call(app);

app.listen(4000);