<template>
  <div class="wrapper">
    <div v-for="item in bookArray" :key="item.ISBN">
      <goods-item :detail="item"></goods-item>
    </div>
  </div>
</template>
<script>
import GoodsItem from 'common/goods/goodsItem.vue'
export default {
  name: 'GoodsContainer',
  components: {
    GoodsItem
  },
  props: {
    bookArray: Array
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 1080px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
</style>
