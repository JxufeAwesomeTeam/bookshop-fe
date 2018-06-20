<template>
  <div class="user">
    <h1>个人中心</h1>
  </div>
</template>
<script>
import axios from 'axios'
import { getCookie } from 'config/token'
export default {
  name: 'User',
  components: {
  },
  mounted () {
    let username = getCookie('username')
    axios.get(`http://liyuzhe.xin/users/${username}`).then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped>
.user {
  min-height: 1000px;
  width: 1080px;
  margin: 0 auto;
}
</style>
