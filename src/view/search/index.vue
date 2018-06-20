<template>
  <div class="search">
    <div class="title">
      搜索结果：
      <span>{{this.$route.params.name}}</span>
    </div>
    <GoodsContainer :bookArray="bookArray" />
  </div>
</template>
<script>
import GoodsContainer from './uiComponents/Container'
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      bookArray: []
    }
  },
  components: {
    GoodsContainer
  },
  mounted () {
    let target = this.$route.params.name
    axios.get(`http://liyuzhe.xin/books/ISBNbooks/?title__icontains=${target}`).then(res => {
      console.log(res.data)
      this.bookArray = res.data
    })
  },
  methods: {
    getBooks () {
      console.log('ddd')
      let target = this.$route.params.name
      axios.get(`http://liyuzhe.xin/books/ISBNbooks/?title__icontains=${target}`).then(res => {
        console.log(res.data)
        this.bookArray = res.data
      })
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'getBooks'
  }
}
</script>
<style lang="scss" scoped>
.search {
    width: 1080px;
    margin: 0 auto;
  .title {
    text-align: center;
    span {
      border: 1px solid #d0d0d0;
      border-radius: 2px;
      padding: 2px 5px;
    }
  }
}
</style>
