<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <nuxt-link to="/">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
            alt="美团">
        </nuxt-link>
      </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家和或地点"
            @focus="focus"
            @blur="blur"
            @input="input"/>
          <nuxt-link to="/products">
            <button class="el-button el-button--primary"><i class="el-icon-search"></i></button>
          </nuxt-link>
          <dl
            class="hotPlace"
            v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,idx) in $store.state.home.hotPlace"
              :key="idx">{{item.name.slice(0,5)}}</dd>
          </dl>
          <dl
            class="searchList"
            v-if="isSearchList">
            <dd v-for="(item,idx) in searchList" :key="idx">{{item.name}}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#"  v-for="(item,idx) in $store.state.home.hotPlace"
              :key="idx">{{item.name.slice(0,5)}}</a>
        </p>
        <ul class="nav">
          <li><nuxt-link
            to="/"
            class="takeout">美团外卖</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="movie">猫眼电影</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="hotel">美团酒店</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="apartment">民宿/公寓</nuxt-link></li>
          <li><nuxt-link
            to="/"
            class="business">商家入驻</nuxt-link></li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund" /><p class="txt">随时退</p></li>
          <li><i class="single" /><p class="txt">不满意免单</p></li>
          <li><i class="overdue"/><p class="txt">过期退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search:'',
      isFocus:false,
      hotPlace:[],
      searchList:["故宫","故宫","火锅","故宫","故宫","火锅"]
    }
  },
  computed: {
    isHotPlace:function(){
      return this.isFocus&&!this.search
    },
    isSearchList:function(){
      return this.isFocus&&this.search
    }
  },
  methods: {
    focus:function(){
      this.isFocus=true
    },
    blur:function(){
      let self = this;
      setTimeout(() => {
        this.isFocus=false
      }, 200);
    },
    input:_.debounce(async function(){
      let self = this;
      let city = self.$store.state.geo.position.city.replace('市','')
      self.searchList=[]
      let {status,data:{top}}=await self.$axios.get('/search/top',{
        params:{
          input:self.search,
          city
        }
      })
      self.searchList=top.slice(0,10)
    },300)
  },
}
</script>

<style lang="css">

</style>
