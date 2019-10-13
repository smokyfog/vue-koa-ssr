<template>
  <div id="header_warp">
    <div id="header_content">
      <div class="header_left">
        闫强个人博客
      </div>
      <div class="header_menu">
        <div id="menu_box">
          <el-menu
            :default-active="activeIndex"
            class="menu_el"
            mode="horizontal"
            height="50px"
            @select="handleSelect"
            background-color="#fff"
            text-color="#3a3a3a"
            active-text-color="#e15782">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">关于</template>
              <el-menu-item index="2-1">关于我</el-menu-item>
              <el-menu-item index="2-2">关于我的博客</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">成长</template>
              <el-menu-item index="3-1">成长</el-menu-item>
              <el-menu-item index="3-2">成长</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">学习</template>
              <el-menu-item index="4-1">学习</el-menu-item>
              <el-menu-item index="4-2">学习</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">留言</el-menu-item>
          </el-menu>
        </div>
        <div id="search_box">
          <el-input
            class="search_input"
            size="small"
            placeholder="请输入搜索的内容"
            suffix-icon="el-icon-search"
            v-model="search_text">
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      search_text: ''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss">
  #header_warp {
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    margin-bottom: 20px;
    // background: rgb(34, 34, 34);
    background: #fff;
    opacity: 0.95;
    // box-shadow: 0 2px 6px 0 rgba(0,0,0,.17);
    #header_content {
      width: 1200px;
      margin: auto;
      height: 100%;
    }
    #header_content > div {
      float: left;
      height: 100%;
      color: #3a3a3a;
    }
    .header_left {
      width: 25%;
      font-size: 24px;
      font-family: cursive;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header_menu {
      width: 75%;
      #menu_box {
        float: left;
        width: 70%;
      }
      #search_box {
        height: 100%;
        width: 30%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        .search_input {
          width: 250px;
          input {
            border-radius: 30px;
            background: #eee;
            
          }
          input:focus:invalid:focus, select:focus:invalid:focus, textarea:focus:invalid:focus {
            border-color: #e9322d;
            box-shadow: 0 0 6px #f8b9b7;
          }
        }
      }
      .menu_el {
        display: flex;
        justify-content: space-between;
      }
      .el-menu--horizontal>.el-menu-item {
        height: 50px;
        line-height: 50px;
      }
      .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 50px;
        line-height: 50px;
      }
    }
  }
</style>
