import Koa from 'koa';
import bodyParser from 'koa-body';
import router from './routes';

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);