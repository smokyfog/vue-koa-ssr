 <template>
  <div id="recommended">
    <div class="clearfix header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          用户管理
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          配置管理
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          角色管理
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick() {
      
    }
  }
};
</script>
 
 <style lang="scss">
 #recommended {
   .header {
      border: 1px solid #EBEEF5;
      background-color: #FFF;
      color: #303133;
      transition: .3s;
     .el-tabs__nav-wrap {
      padding: 0 8px;
      background: #F7F7F7;
      // border-bottom: 1px solid #EBEEF5;
      box-sizing: border-box;
     }
     .el-tabs__content {
       height: 300px;
     }
     .el-tabs__nav-wrap::after {
      height: 0px
    }
   }
   .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
 }
</style>