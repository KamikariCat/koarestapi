'use strict';

const Koa = require('koa');
const https = require('https');
const fs = require('fs');

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

https.createServer({
      key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/sharepic.pro/privkey.pem'), 'utf8').toString(),
      cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/sharepic.pro/privkey.pem'), 'utf8').toString(),
}, app.callback()).listen(4000);

//app.listen(4000);
