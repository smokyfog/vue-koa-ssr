 <template>
  <div id="hot_recommended">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>热门推荐</span>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div class="item_box">
        <div v-for="o in 4" :key="o" class="text item">
          
        </div>
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
 #hot_recommended {
    .box-card {
      // margin-bottom: 10px;
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
          width: calc(50% - 1px);
          height: 120px;
          display: inline-block;
          background: #fff;
        }
        :nth-child(odd){
          border-right: 1px solid #ececec;
          border-bottom: 1px solid #ececec;
          // border: 0 1px 1px 0
        }
        :nth-child(even) {
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