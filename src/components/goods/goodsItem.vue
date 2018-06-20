<template>
  <div class="item">
    <div class="img">
      <img :src="'https://'+detail.photo.slice(2)" alt="">
    </div>
    <div class="addShop" @click="handleClick(detail.id)"></div>
    <div class="addShare" @click="handleShare(detail.id)"></div>
    <div class="detail">
      <div class="title">
        {{detail.title}}
      </div>
      <div @click="handleHis(detail.id)" class="price">
        <a :href="detail.Books[0].url" target="_Blank">
          <div class="tb shop">
            <p class="price active">¥ {{detail.Books[0].price}}</p>
            <div class="icon"></div>
          </div>
        </a>
        <a :href="detail.Books[1].url" target="_Blank">
          <div class="dd shop">
            <p class="price">¥ {{detail.Books[1].price}}</p>
            <div class="icon"></div>
          </div>
        </a>
        <a :href="detail.Books[2].url" target="_Blank">
          <div class="jd shop">
            <p class="price">¥ {{detail.Books[2].price}}</p>
            <div class="icon"></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { getCookie } from 'config/token'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'GoodsItem',
  props: {
    detail: Object
  },
  methods: {
    handleClick (id) {
      this.$emit('addShop', id)
      let username = getCookie('username')
      if (!!username === true) {
        console.log(getCookie('token'))
        axios({
          method: 'post',
          url: 'http://liyuzhe.xin/carts/items/',
          data: qs.stringify({bid: id}),
          headers: {
            Authorization: 'Token ' + getCookie('token')
          }
        }).then(res => {
          if (res.status === 200) {
            this.$message({
              message: '添加成功',
              type: 'success'
            })
          } else {
            this.$message({
              message: '添加失败',
              type: 'warning'
            })
          }
        }).catch(err => {
          console.log(err)
          this.$message({
            message: '添加失败',
            type: 'warning'
          })
        })
      } else {
        this.$router.push('/login')
      }
    },
    handleHis (id) {
      let username = getCookie('username')
      if (!!username === true) {
        axios({
          method: 'post',
          url: 'http://liyuzhe.xin/history/history/',
          data: qs.stringify({bid: id}),
          headers: {
            Authorization: 'Token ' + getCookie('token')
          }
        })
      } else {
        this.$router.push('/login')
      }
    },
    handleShare (id) {
      let username = getCookie('username')
      if (!!username === true) {
        this.$prompt('请输入分享内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          console.log(value)
          axios({
            method: 'post',
            url: 'http://liyuzhe.xin/share/share/',
            data: qs.stringify({bid: id, text: value}),
            headers: {
              Authorization: 'Token ' + getCookie('token')
            }
          }).then(res => {
            if (res.status === 200) {
              this.$message({
                message: '分享成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: '分享失败',
                type: 'warning'
              })
            }
          }).catch(err => {
            console.log(err)
            this.$message({
              message: '分享失败',
              type: 'warning'
            })
          })
        }).catch(() => {

        })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  border: 1px solid #efefef;
  width: 300px;
  margin-top: 20px;
  position: relative;
  cursor: pointer;
  &:hover {
    border-color: #33cc99;
  }
  .img {
    height: 300px;
    width: 300px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .addShop {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 20px;
    width: 20px;
    // background: #33cc99;
    background-image: url(../../assets/images/addShop.png);
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: cover;
    opacity: .4;
    cursor: pointer;
    &:hover{
      opacity: 1;
    }
  }
  .addShare {
  position: absolute;
  top: 10px;
  left: 10px;
  height: 20px;
  width: 20px;
  // background: #33cc99;
  background-image: url(../../assets/images/share.png);
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  opacity: .4;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
  }
  .detail {
    height: 120px;
    width: 300px;
    box-sizing: border-box;
    .title {
      height: 38px;
      font-size: 15px;
      white-space: wrap;
      overflow: hidden;
      line-height: 20px;
      padding: 4px;
    }
    .price{
      .shop{
        display: inline-block;
        width: 95px;
        height: 75px;
        text-align: center;
        padding-top: 10px;
        box-sizing: border-box;
        .icon {
          display: inline-block;
          position: relative;
          top: 6px;
          height: 22px;
          width: 22px;
          background-image: url(../../assets/images/jd.png);
          background-repeat: no-repeat;
          background-position: center 0;
          background-size: 100%;
        }
        .price {
          font-size: 20px;
          color: #33cc99;
          margin: 0;
        }
        .active {
          // color: red;
        }
      }
      .tb {
        .icon {
          background-image: url(../../assets/images/tb.png);
        }
      }
      .dd {
        .icon {
          background-image: url(../../assets/images/dd.png);
        }
      }
      .jd {
        .icon {
          background-image: url(../../assets/images/jd.png);
        }
      }
    }
  }
}
</style>
