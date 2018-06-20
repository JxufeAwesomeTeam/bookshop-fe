<template>
  <div>
    <index-nav></index-nav>
    <div class="title">
      <span>分享广场</span>
    </div>
    <good-share :bookArray="bookArray"></good-share>
  </div>
</template>
<script>
import IndexNav from './uiComponents/nav'
import GoodShare from './uiComponents/main'
import axios from 'axios'
export default {
  name: 'Share',
  components: {
    IndexNav,
    GoodShare
  },
  data () {
    return {
      bookArray: []
    }
  },
  mounted () {
    axios.get('http://liyuzhe.xin/share/').then(res => {
      console.log(res.data)
      // let data = res.data
      // let target = []
      // let gg = []
      // for (var i = 0; i < data.length; i++) {
      //   console.log(data[i])
      // }
      // this.bookArray = res.data
    })
  }
}
</script>
<style lang="scss" scoped>
  h1{
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
