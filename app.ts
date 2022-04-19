import "reflect-metadata";
import Koa from 'koa'

import { useKoaServer } from 'routing-controllers';
import * as controllers from './app/controller/index'
import { useMiddlewares } from './app/middlewares'

const koa = new Koa()

const app = useKoaServer(koa, {
  // 注入路由
  controllers: Object.keys(controllers).map(key => controllers[key]),
  validation: true,
  defaultErrorHandler: true,
});
//  使用中間件
useMiddlewares(koa)
app.listen(3300);