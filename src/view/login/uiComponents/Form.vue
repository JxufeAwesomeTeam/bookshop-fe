<template>
  <div class="form">
    <div class="item">
      <p>账号登录</p>
      <div class="box count">
        <span class="icon"></span>
        <input v-model="username" placeholder="请输入账号" type="text">
      </div>
      <div class="box pwd">
        <span class="icon"></span>
        <input v-model="password" placeholder="请输入密码" type="password">
      </div>
      <router-link tag="p" to="register" class="noCount">没有账号？赶紧注册</router-link>
      <div @click="handleSubmit" class="button">
        登录
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
import {setCookie} from 'config/token.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      let username = this.username
      let password = this.password
      axios.post('http://liyuzhe.xin/users/login/', qs.stringify({
        username,
        password
      })).then(res => {
        if (res.status === 201) {
          setCookie('token', res.data)
          setCookie('username', username)
          this.$message({
            message: '登录成功，正在跳转到主页',
            type: 'success'
          })
          setTimeout(() => {
            this.$router.push('/')
          }, 1000)
        } else {
          this.$message({
            message: '登录失败',
            type: 'warning'
          })
        }
      }).catch(err => {
        console.log(err.message)
        this.$message({
          message: '登录失败  ' + err.message,
          type: 'warning'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
  position: relative;
  height: 800px;
  background-image: url(~images/bg.jpg);
  background-position: right bottom;
  background-size: cover;
  .item {
    position: absolute;
    top: 100px;
    left: 270px;
    height: 340px;
    width: 380px;
    background: rgba(0, 0, 0, .06);
    p {
      text-align: center;
      font-size: 22px;
      margin-top: 10px;
      color: #848282;
    }
    .box {
      margin: 0 auto;
      height: 40px;
      width: 300px;
      border: 1px solid #dedede;
      line-height: 40px;
      margin-top: 30px;
      background: #fff;
      .icon {
        display: inline-block;
        position: relative;
        top: 6px;
        height: 25px;
        width: 40px;
        box-sizing: border-box;
        background-size: 25px 25px;
        border-right: 1px solid #dedede;
        background-repeat: no-repeat;
        background-position: center;
      }
      input {
        border-width: 0;
        line-height: 38px;
        vertical-align: top;
        width: 250px;
        outline:none;
        font-size: 16px;
      }
    }
    .count {
      .icon {
        background-image: url(~images/user.png);
      }
    }
    .pwd {
      .icon {
        background-image: url(~images/lock.png);
      }
    }
    .noCount {
      width: 300px;
      margin: 10px auto;
      font-size: 13px;
      text-align: right;
      color: #2196f3;
      cursor: pointer;
      &:hover {
        color: #0f85e2;
      }
    }
    .button {
      height: 40px;
      width: 300px;
      background: #33cc99;
      margin: 20px auto;
      color: #fff;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: #1cd497;
      }
      &:active {
        background: #259a73;
      }
    }
  }
}
</style>
