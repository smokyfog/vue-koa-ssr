<template>
  <div id="footer_wrap">
    <div id="footer_content">
      <div class="col-sm-12 footer_info">
        <span>
          Copyright © 2019
        </span> |
        <span>
          Powered by <a href="" class="copyright-links" target="_blank" rel="nofollow">yq</a>
        </span> |
        <span>
            Theme by <a href="//github.com/smokyfog" class="copyright-links" target="_blank" rel="nofollow">smokyfog</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  #footer_wrap {
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.17);
    #footer_content {
      width: 1200px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .footer_info {
        color: rgb(112, 112, 112);
        font-size: 14px;  
        a {
          color: rgb(80, 80, 80);
        }
        span {
          padding: 0 4px;
        }
      }
    }
  }
</style>