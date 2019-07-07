import Router from 'koa-router'
import axios from './utils/axios'
import Poi from '../dbs/models/poi'

let router = new Router({prefix:'/search'})

const sign = 'abc'

router.get('/top',async (ctx) => {
  let list = [{
      "name":'李文正宗麻辣火锅鸡鱼',
      "type":'景点'
    },
    {
      "name":"英子吹黄口正宗麻辣火锅",
      "type":"美食"
    },
    {
      "name":"魏蜀吴老火锅",
      "type":"美食"
    },
    {
      "name":"致远正宗麻辣火锅鸡",
      "type":"景点"
    },
    {
      "name":"署张-鱼火锅",
      "type":"美食"
    }]
  ctx.body = {
    "top":list
  }
})

export default router
