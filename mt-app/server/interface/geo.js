import Router from 'koa-router';
import axios from './utils/axios';
import Province from '../dbs/models/province'
import City from '../dbs/models/city'

let router = new Router({prefix:'/geo'})

const sign = 'abc';


router.get('/getPosition', async (ctx) => {
  // let {
  //   status,
  //   data: {
  //     province,
  //     city
  //   }
  // } = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  // if (status === 200) {
    ctx.body = {
      province:'北京市',
      city:'北京市'
    }
  // } else {
  //   ctx.body = {
  //     province: '',
  //     city: ''
  //   }
  // }
})


router.get('/province', async (ctx) => {
  let province = await Province.find()
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value[0]
      }
    })
  }
})

router.get('/province/:id', async (ctx) => {
  let city = await city.findOne({id: ctx.params.id})

  ctx.body = {
    code: 0,
    city:city.value.map(item => {
      return {
        provide: item.provide,
        id: item.id,
        name: item.name
      }
    })
  }
})

router.get('/city', async (ctx) => {
  let city = []
  let result = await City.find()
  result.forEach(item => {
    city = city.concat(item.value)
  })
  ctx.body = {
    code: 0,
    city: city.map(item => {
      return {
        province: item.province,
        id: item.id,
        name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
          ? item.province
          : item.name
      }
    })
  }
})

router.get('/hotcity', async (ctx) => {
  let list = [
    '北京市',
    '上海市',
    '广州市',
    '深圳市',
    '天津市',
    '西安市',
    '杭州市',
    '南京市',
    '武汉市',
    '成都市'
  ]
  let result = await City.find()
  let nList = []
  result.forEach(item => {
    // nList = nList.concat(item.value.filter(k => list.includes(k.name))) //不全
  })
  ctx.body = {
    hosts : nList
  }
})

router.get('/menu', async (ctx) => {
  // const result = await Menu.findOne()
  ctx.body = {
    // menu : result.menu,
    menu : [{
              type:'food',
              name:'美食',
              child:[{
                  title:'美食',
                  child:['代金券', '甜点饮品', '火锅', '小吃快餐']
              }]
          },{
              type:'takeout',
              name:'外卖',
              child:[{
                  title:'外卖',
                  child:['美团外卖']
              }]
          },
          {
              type:'hotel',
              name:'酒店',
              child:[{
                  title:'酒店星级',
                  child:['经济型','舒适/三星','高档/四星','豪华/五星']
              }]
          },
          {
              type:'hotel',
              name:'榛果民宿',
              child:[{
                  title:'热门城市',
                  child:['经济型','舒适/三星','高档/四星','豪华/五星']
              }]
          },{
              type:'hotel',
              name:'猫眼电影',
              child:[{
                  title:'热映电影',
                  child:['蜘蛛侠','舒适/三星','高档/四星','豪华/五星']
              }]
          }]
  }
})



export default router;
