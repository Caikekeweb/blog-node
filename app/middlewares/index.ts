
 import Koa from 'koa'

 const favicon = require('koa-favicon');
 import { setHeader } from './header'
 
 export const useMiddlewares = <T extends Koa>(app: T): T => {
   app.use(setHeader)

   app.use(favicon(__dirname + '../../../favicon.ico'))
 
   return app
 }
 