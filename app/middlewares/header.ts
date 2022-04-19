import { Context, Next} from "koa";
/**
 * 設置服務請求頭
 * @param ctx 
 * @param next 
 */
export const setHeader = (ctx: Context, next: Next)=>{
    ctx.response.set('Cross-Origin-Embedder-Policy', 'require-corp');
    ctx.response.set('Cross-Origin-Opener-Policy', 'same-origin');
    ctx.response.set('Cross-Origin-Resource-Policy', 'cors-origin');
    next();
}