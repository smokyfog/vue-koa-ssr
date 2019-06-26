const Koa = require('koa')
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const pv = require("./moddleware/koa-pv");
const m1 = require("./moddleware/m1");
const m2 = require("./moddleware/m2");
const m3 = require("./moddleware/m3");

const session = require("koa-generic-session");
const Redis =require("koa-redis");

const mongoose = require("mongoose")
const dbConfig = require("./dbs/config")

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)


const redisConfig = {
  host: '129.28.187.206',   // Redis host
}
app.keys=['keys','keyskeys'];
app.use(session({
  key:'mt',     //修改存储名称
  prefix:'mtpr',
  store:new Redis(redisConfig)
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(pv())
app.use(m1())
app.use(m2())
app.use(m3())

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
mongoose.connect(dbConfig.dbs,{
  useNewUrlParser: true
})


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
