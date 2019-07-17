<template>
  <div class="page-cart">
    <el-row>
      <el-col 
        v-if="cart.length"
        :span="24"
        class="m-cart"
      >
        <list />
      </el-col>
      <el-col 
        v-else
        :span="24"
        class="empty"
      >购物车为空</el-col>
    </el-row>
  </div>
</template>

<script>
import list from '@/components/cart/list.vue'
export default {
  components:{
    list
  },
  data() {
    return {
      cart: ['1']
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/cart/index.scss";
</style>>

