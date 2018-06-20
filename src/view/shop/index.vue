<template>
  <div>
    <index-nav></index-nav>
    <div class="title">
      <span>我的购物车</span>
    </div>
    <goods-container :bookArray="bookArray"></goods-container>
  </div>
</template>
<script>
import GoodsContainer from './uiComponents/main'
import IndexNav from './uiComponents/nav'
import axios from 'axios'
import { getCookie } from 'config/token'
export default {
  name: 'Shop',
  components: {
    IndexNav,
    GoodsContainer
  },
  data () {
    return {
      bookArray: []
    }
  },
  mounted () {
    let username = getCookie('username')
    if (!!username === true) {
      axios({
        method: 'get',
        url: 'http://liyuzhe.xin/carts/items/',
        // data: qs.stringify({bid: id, text: value}),
        headers: {
          Authorization: 'Token ' + getCookie('token')
        }
      }).then(res => {
        // this.bookArray = res.data
        console.log(res.data)
        let gg = res.data
        let target = []
        for (var i = 0; i < gg.length; i++) {
          target.push(gg[i].book)
        }
        console.log(target)
        this.bookArray = target
      })
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
  h1 {
    color: red;
  }
  .title {
    text-align: center;
    span {
      border: 1px solid #d0d0d0;
      border-radius: 2px;
      padding: 2px 5px;
    }
  }
</style>
