import Router from 'koa-router';
import Redis from 'koa-redis';
import nodeMailer from 'nodemailer';
import User from '../dbs/models/users';
import Passport from './utils/passport';
import Email from '../dbs/config';
import axios from './utils/axios';

let  router = new Router({
  prefix:'/users'
})

const redisConfig = {
  host: '129.28.187.206',   // Redis host
}
let Store = new Redis(redisConfig).client


//注册
router.post('/signup', async (ctx) => {
  const {username, password, email, code} = ctx.request.body;

  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }
  let user = await User.find({username})
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return
  }
  let nuser = await User.create({username, password, email})
  if (nuser) {
    let res = await axios.post('/users/signin', {username, password})
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

//登录
router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function(err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

//验证码
router.post('/verify', async (ctx, next) => {
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟内1次'
    }
    return false
  }
  //创建邮箱  //发送对象
  let transporter = nodeMailer.createTransport({
    service: 'qq',
    port:587,
    secure:false, //true的话为监听456端口fasle为监听其他端口
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  //接收对象
  let ko = {
    code: Email.smtp.code(),        //发送的验证码
    expire: Email.smtp.expire(),    //过期时间
    email: ctx.request.body.email,  //发送给的邮箱名
    user: ctx.request.body.username //用户名
  }
  //发送信息
  let mailOptions = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: ko.email,
    subject: '《仿美团网》注册码',
    html: `您在《仿美团网》中注册，您的邀请码是${ko.code}`
  }
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    } else {
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，可能会有延时，有效期1分钟'
  }
})

//退出接口
router.get('/exit', async (ctx, next) => {
  //注销
  await ctx.logout()
  //检测是否成功注销
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

//获取用户信息
router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const {username, email} = ctx.session.passport.user
    ctx.body={
      user:username,
      email
    }
  }else{
    ctx.body={
      user:'',
      email:''
    }
  }
})

export default router

