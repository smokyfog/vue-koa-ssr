 <template>
  <div id="friendlyLink">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>友情链接</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div v-for="o in 8" :key="o" class="text link_box">
        <a  href="https://www.duanliang920.com" class="links">
          <span>段亮个人博客</span>  
        </a>
      </div>
    </el-card>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {

    }
  }
};
</script>
 
 <style lang="scss">
 #friendlyLink {
    .box-card {
      margin-bottom: 10px;
      .el-card__header {
        padding: 12px 8px;
        background:#F7F7F7;
      }
      .el-card__body {
        padding: 10px;
      }
      
      .link_box {
        display: inline-block;
        width: calc(50% - 10px);
        box-sizing: border-box;
        margin: 5px;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          font-size: 13px;
          span {
            display: inline-block;
            padding: 5px 10px;
            color: rgb(41, 41, 41);
            border: 1px solid #ccc;
          }
          span:hover {
            border-color: rgb(52, 206, 253);
            color:  rgb(52, 206, 253);
          }
        }
      }
   }
   .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
 }
</style>