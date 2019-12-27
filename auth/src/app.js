const Koa = require('koa');
const Router = require('koa-router');

const frontpage = require('./services/frontpage')
const auth = require('./services/auth')

const app = new Koa();
const router = new Router();

router.get('/', frontpage);
router.use('/auth', auth.routes());

app.use(router.routes());
module.exports = app.listen();
