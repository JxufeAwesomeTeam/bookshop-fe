<template>
  <div>
    <index-nav></index-nav>
    <index-swiper></index-swiper>
    <goods-container :bookArray="bookArray"></goods-container>
  </div>
</template>
<script>
import IndexNav from './uiComponents/nav'
import IndexSwiper from './uiComponents/swiper'
import IndexChoose from './uiComponents/choose'
import GoodsContainer from './uiComponents/main'
import axios from 'axios'
export default {
  name: 'Select',
  components: {
    IndexNav,
    IndexSwiper,
    IndexChoose,
    GoodsContainer
  },
  data () {
    return {
      bookArray: []
    }
  },
  mounted () {
    axios.get('http://liyuzhe.xin/books/ISBNbooks/x/?x=choose').then(res => {
      console.log(res.data)
      this.bookArray = res.data
    })
  }
}
</script>
<style lang="scss" scoped>
  h1{
    color: red;
  }
</style>
