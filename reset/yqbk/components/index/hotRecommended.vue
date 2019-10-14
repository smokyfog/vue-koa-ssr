 <template>
  <div id="hot_recommended">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>热门推荐</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="item_box">
        <div v-for="item in hotList" :key="item.id + new Date().getTime()" class="text item">
          <div class="item_left">
            <img :src='item.url' alt="">
          </div>
          <div class="item_right"> 
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      hotList : [
        {
          id: 1,
          url: 'http://www.zbboke.com/uploads/161121/1-1611211H235553.jpg',
          title: '哈佛大学用这12张图，教育了10亿人_心灵鸡汤',
          desc: '很多人把感恩当成一种付出，其实感恩本身就是一种幸福。..'
        },
        {
          id: 2,
          url: 'http://www.zbboke.com/uploads/161023/1-161023142526233.jpg',
          title: '梳子能卖给和尚,你信吗？而所谓的营销到底是什么？',
          desc: '今天和大家分享一个营销的理念！也是我从别的渠道看到的觉得非常不错，分享给大家！ 有一个营销经理想考考他的手下，就给他们出了一道题，把梳子卖给和尚。 第一个人：出了门...'
        },
        {
          id: 3,
          url: 'http://www.zbboke.com/uploads/161021/1-161021195620547.jpg',
          title: '为什么男人喜欢绿茶表,这让女汉子如何活呀……',
          desc: '今天咱们来谈谈绿茶婊 绿茶婊 泛指那些外表清新脱俗， 内心工于心计的女子。 很多妹纸在后台哭诉， 为什么好男人都喜欢绿茶婊？ 她都骚的那么明显了为什么男人还觉得纯？ 男人为...'
        },
        {
          id: 4,
          url: 'http://www.zbboke.com/uploads/161125/1-1611251H645N2.jpg',
          title: '【力荐】一个北漂五年的人告诉你，为什么二十多岁的你要努力.满满的正能量',
          desc: '还有人问我，凭什么就说钱是人的胆？ 尊严大于一切!有尊严就有活着的意义!没钱也可以有尊严，你这是悖论，当你的孩子看到一样东西露出渴求的眼神，你问他想不想要，他“乖巧懂事”的回...'
        },
        {
          id: 1,
          url: 'http://www.zbboke.com/uploads/161125/1-1611251H645N2.jpg',
          title: '【力荐】年轻的时候为什么不努力就是在犯罪,接着上次的聊',
          desc: '　一个人很丑，有个很漂亮的老婆，这个人一定不简单，一是营销能力强；二是心理战术一定不错。不要去诋毁人家，多向人家学习...'
        },
        {
          id: 1,
          url: 'http://www.zbboke.com/uploads/161114/1-1611141G542649.jpg',
          title: '今年我二十七八岁',
          desc: '我今年二十七八岁 不再乱买东西 月底开始算计 还了信用卡 开销多少 还剩下多少 该开始攒钱买房子了 我今年二十七八岁 偶尔会有寂寞 偶尔会挂念一个人 我今年二十七八岁 我开始追...'
        },
      ]
    }
  }
};
</script>
 
 <style lang="scss">
 #hot_recommended {
    .box-card {
      margin-bottom: 10px;
      .el-card__header {
        padding: 8px;
        background:#F7F7F7;
      }
      .el-card__body {
        padding: 0;
      }
      .item_box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        .item {
          width: calc(50% - 11px);
          padding: 5px;
          height: 100px;
          display: inline-block;
          background: #fff;
          .item_left {
            float: left;
            height: calc(100% - 20px) ;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30%;
            img {
              border-radius: 9px;
              max-width: 100%;
              max-height: 100%
            }
          }
          .item_right {
            width: 65%;
            float: right;
            h3 {
              overflow: hidden;
              margin: 15px 0 0 0;
              padding: 1px 6px;
              height: 25px;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-weight: 700;
              font-size: 14px;
            }
            p {
              font-size: 12px;
              line-height: 20px;
              padding: 0px 6px;
              color: rgb(153, 153, 153);
              margin: 0 0 10px;
              overflow: hidden;
              height: 40px;
            }
            
          }
        }
        & > :nth-child(odd){
          border-right: 1px solid #ececec;
          border-bottom: 1px solid #ececec;
          // border: 0 1px 1px 0
        }
        & > :nth-child(even) {
          // border-left: 1px solid #ccc;
          border-bottom: 1px solid #ececec;
        }
      }
      
   }
   .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
 }
</style>