<template>
  <div class="container">
    <div id="banner_box">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in banner" :key="item.name + new Date().getTime() + item.url">
          <h3>
            <img :src="item.url" alt="">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row id="container_main" :gutter="20">
      <el-col :span="18">
        <div class="container_left">
          <Hot />
          <Recom />
          <Hot />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="container_right">
          <Link />
          <Link />
          <Link />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Hot from '~/components/index/hotRecommended.vue'
import Link from '~/components/index/friendlyLink.vue'
import Recom from '~/components/index/Recommended.vue'

export default {
  data() {
    return {
      banner:[
        {
          name: 1,
          url: 'http://www.zbboke.com/templets/boke/picture/banner_3.jpg'
        },
        {
          name: 1,
          url: 'http://www.zbboke.com/templets/boke/picture/banner.gif'
        },
        {
          name: 1,
          url: 'http://www.zbboke.com/templets/boke/picture/banner_1.jpg'
        }
      ]
    }
  },
  components: {
    Hot,
    Link,
    Recom
  }
}
</script>

<style lang="scss">
.container {
  #banner_box {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
  #container_main {
    margin-top: 10px;
    .container_left {
      // height: 1200px;
      // background: rgb(179, 179, 179);
    }
    .container_right {
      // background: #ccc;
    }
  }
}
</style>
