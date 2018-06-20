<template>
  <div class="form">
    <div class="item">
      <p>账号注册</p>
      <div class="box count">
        <span class="icon"></span>
        <input v-model="username" placeholder="请输入您的账号" type="text">
      </div>
      <div class="box pwd">
        <span class="icon"></span>
        <input v-model="password1" placeholder="请输入您的密码" type="password">
      </div>
      <div class="box pwd">
        <span class="icon"></span>
        <input v-model="password2" placeholder="请再次输入您的密码" type="password">
      </div>
      <div class="box email">
        <span class="icon"></span>
        <input v-model="email" placeholder="请输入您的邮箱" type="text">
      </div>
      <div class="box select">
        <span class="icon"></span>
        <el-select v-model="sex" placeholder="妹子吗？">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <router-link tag="p" to="login" class="noCount">已有账号？马上登录</router-link>
      <div @click="handleSubmit" class="button">
        注册
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
import { setCookie } from 'config/token'
export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      password1: '',
      password2: '',
      email: '',
      sex: '',
      options: [{
        value: 'female',
        label: '女'
      }, {
        value: 'male',
        label: '男'
      }]
    }
  },
  methods: {
    handleSubmit () {
      let username = this.username
      let password1 = this.password1
      let password2 = this.password2
      let email = this.email
      let sex = this.sex
      axios.post('http://liyuzhe.xin/users/register/', qs.stringify({
        username,
        password1,
        password2,
        email,
        sex
      })).then(res => {
        if (res.status === 201) {
          setCookie('username', username)
          console.log(res)
          this.$message({
            message: '注册成功，正在跳转到主页',
            type: 'success'
          })
          axios.post('http://liyuzhe.xin/users/login/', qs.stringify({
            username,
            password: password1
          })).then(res => {
            if (res.status === 201) {
              setCookie('token', res.data)
            }
            setTimeout(() => {
              this.$router.push('/')
            }, 1000)
          })
        } else {
          this.$message({
            message: '注册失败',
            type: 'warning'
          })
        }
      }).catch(err => {
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
.form /deep/ .el-input__inner {
  border-width: 0;
  width: 250px;
  height: 36px;
}
.form {
  position: relative;
  height: 800px;
  background-image: url(~images/bg.jpg);
  background-position: right bottom;
  background-size: cover;
  .item {
    position: absolute;
    top: 50px;
    left: 270px;
    height: 540px;
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
    .email {
      .icon {
        background-image: url(~images/email.png);
      }
    }
    .select {
      .icon {
        background-image: url(~images/sex.png);
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
