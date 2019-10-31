import Koa from 'koa';
import router from './routes';
import bodyParser from 'koa-body';
const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);