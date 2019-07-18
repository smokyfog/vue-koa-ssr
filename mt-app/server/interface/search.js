import Router from 'koa-router'
import axios from './utils/axios'
import Poi from '../dbs/models/poi'

let router = new Router({prefix:'/search'})

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

router.get('/hotPlace', async (ctx) => {
  let city = ctx.store?ctx.store.geo.position.city:ctx.query.city
  let list = [{
    "name":'KFC炸鸡',
    "type":'美食'
  },
  {
    "name":"正宗杨国福麻辣烫",
    "type":"美食"
  },
  {
    "name":"大悦城购物中心",
    "type":"景点"
  },
  {
    "name":"李先生牛肉拉面",
    "type":"美食"
  },
  {
    "name":"署张-鱼火锅",
    "type":"美食"
  }]
  ctx.body = {
    "result":list
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  const { city,keyword } = ctx.query;
  let list1 = [
    {
      "name":'探鱼（东方新天地店',
      "type":'鸿靓e足养生',
      "biz_ext":{
        "cost":899,
        "rating":3
      },
      "address": '北京市朝阳区',
      "tel": 110,
      "photos":[{
        "url":"//p0.meituan.net/msmerchant/ea3833b3734b2d3bb285310c31e3e6ba908968.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/164811368/"
    },
    {
      "name":'小王府徽菜臭鳜鱼',
      "type":'鱼',
      "biz_ext":{
        "cost":499,
        "rating":4
      },
      "photos":[{
        "url":"//p1.meituan.net/msmerchant/17d8cd5405ccc74eb440af6fe7c8892f853757.png@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/192641950/"
    },
    {
      "name":'天安瑞嘉烤鸭',
      "type":'烤鸭3人套餐，提供免费WiFi',
      "biz_ext":{
        "cost":299,
        "rating":4
      },
      "photos":[{
        "url":"//p0.meituan.net/merchantpic/8d40aacd77004b484151c1ee547918d287691.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/4858264/"
    },
    {
      "name":'中央电视塔空中观景旋转餐厅',
      "type":'自助晚餐',
      "biz_ext":{
        "cost":111,
        "rating":5
      },
      "photos":[{
        "url":"//p0.meituan.net/msmerchant/808d531552463e68d8cbc51032dd3269109403.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/164811368/"
    },
    {
      "name":'北京饭店诺金东33餐厅',
      "type":'桌餐A，建议8-10人使用',
      "biz_ext":{
        "cost":3000,
        "rating":3
      },
      "photos":[{
        "url":"//p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/164811368/"
    },
    {
      "name":'大董（金宝汇店）',
      "type":'外宾烤鸭双人套餐',
      "biz_ext":{
        "cost":1150,
        "rating":2
      },
      "photos":[{
        "url":"//p0.meituan.net/msmerchant/96a8260ce5e79d6fa448afaf5e0f6daf575800.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/164811368/"
    }
  ]
  ctx.body = {
    count:6,
    pois:list1
  }
})

router.get('/products', async (ctx) => {
  let keyword = ctx.query.keyword || '旅游'
  let city = ctx.query.city || '北京'
  let product = {
    "name":'探鱼（东方新天地店',
    "type":'鸿靓e足养生',
    "biz_ext":{
      "cost":899,
      "rating":3
    },
    "address": '北京市朝阳区',
    "tel": 110,
    "photos":[{
      "url":"//p0.meituan.net/msmerchant/ea3833b3734b2d3bb285310c31e3e6ba908968.jpg@368w_208h_1e_1c"
    }],
    "url":"//www.meituan.com/meishi/164811368/"
  }

  let more = [
    {
      "name":'天安瑞嘉烤鸭',
      "type":'烤鸭3人套餐，提供免费WiFi',
      "biz_ext":{
        "cost":299,
        "rating":4
      },
      "address": '北京市朝阳区',
      "tel": 1100,
      "photos":[{
        "url":"//p0.meituan.net/merchantpic/8d40aacd77004b484151c1ee547918d287691.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/4858264/"
    },
    {
      "name":'中央电视塔空中观景旋转餐厅',
      "type":'自助晚餐',
      "biz_ext":{
        "cost":111,
        "rating":5
      },
      "address": '北京市朝阳区',
      "tel": 120,
      "photos":[{
        "url":"//p0.meituan.net/msmerchant/808d531552463e68d8cbc51032dd3269109403.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/164811368/"
    },
    {
      "name":'北京饭店诺金东33餐厅',
      "type":'桌餐A，建议8-10人使用',
      "biz_ext":{
        "cost":3000,
        "rating":3
      },
      "address": '北京市朝阳区',
      "tel": 119,
      "photos":[{
        "url":"//p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/164811368/"
    },
    {
      "name":'大董（金宝汇店）',
      "type":'外宾烤鸭双人套餐',
      "biz_ext":{
        "cost":1150,
        "rating":2
      },
      "address": '北京市朝阳区',
      "tel": 112,
      "photos":[{
        "url":"//p0.meituan.net/msmerchant/96a8260ce5e79d6fa448afaf5e0f6daf575800.jpg@368w_208h_1e_1c"
      }],
      "url":"//www.meituan.com/meishi/164811368/"
    }
  ]

  ctx.body = {
    product,
    more: ctx.isAuthenticated() ? more: [],
    login: ctx.isAuthenticated()
  }
})

export default router
