import Router from 'koa-router';
import axios from './utils/axios';

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


export default router;
