<template>
  <div class="banner">
    <div class="top">
      <div class="content">
        <p class="slogon">你需要的，都给你挑好了</p>
        <div v-if="!logined" class="option">
          <router-link to="/login" tag="span">登录</router-link>
          <router-link to="/register" tag="span">注册</router-link>
        </div>
        <div v-else class="option">
          <span>Hi，{{this.username}}</span>
          <span @click="logout">退出登录</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <router-link to="/" tag="div" class="logo"></router-link>
      <div @click="handleRouter" class="shopCar-icon icon"></div>
      <div @click="search" class="search-icon icon"></div>
      <input @keyup.enter="search" v-model="value" placeholder="Python从入门到放弃" type="text" class="search">
    </div>
  </div>
</template>
<script>
import { getCookie, clearCookie } from 'config/token'
export default {
  name: 'Banner',
  data () {
    return {
      logined: false,
      username: '',
      value: ''
    }
  },
  methods: {
    search () {
      let name = this.value
      this.$router.push({ name: 'Serarch', params: { name } })
    },
    logout () {
      clearCookie('token')
      clearCookie('username')
      this.$router.push('/login')
    },
    changeBar () {
      let username = getCookie('username')
      if (!!username === true) {
        this.logined = true
        this.username = username
      } else {
        this.logined = false
      }
    },
    handleRouter () {
      this.$router.push('/shop')
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'changeBar'
  },
  mounted () {
    let username = getCookie('username')
    if (!!username === true) {
      this.logined = true
      this.username = username
    }
  }
}
</script>
<style lang="scss" scoped>
input:focus {
  outline: none;
}
input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #999;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #999;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #999;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #999;
}
.banner {
  color: #ccc;
  .top {
    height: 35px;
    background: #333;
    .content {
      width: 1080px;
      margin: 0 auto;
      .slogon {
        display: inline-block;
        line-height: 35px;
        margin: 0;
        font-size: 12px;
      }
      .option {
        float: right;
        line-height: 35px;
        font-size: 12px;
        span {
          margin-left: 10px;
          color: #ccc;
          cursor: pointer;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
  .bottom {
    width: 1080px;
    height: 140px;
    margin: 0 auto;
    .logo {
      display: inline-block;
      height: 110px;
      width: 280px;
      margin-top: 30px;
      background-image: url(~images/logo.png);
      background-repeat: no-repeat;
      background-position: center 0;
      background-size: 100%;
      cursor: pointer;
    }
    .search {
      display: inline-block;
      float: right;
    }
    input {
      height: 30px;
      width: 240px;
      font-size: 14px;
      margin-top: 60px;
      color: black;
      outline: none;
      border-width: 0;
      border-bottom: 1px solid #33cc99;
    }
    .shopCar-icon {
      height: 26px;
      width: 26px;
      margin-top: 65px;
      margin-left: 20px;
      background-image: url(~images/shop.png);
    }
    .search-icon {
      height: 23px;
      width: 23px;
      margin-top: 67px;
      background-image: url(~images/search.png);
    }
    .icon {
      float: right;
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: center 0;
      background-size: 100%;
    }
  }
}
</style>
