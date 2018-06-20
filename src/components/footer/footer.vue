<template>
  <div class="footer">
    <ul>
      <li>关于我们</li>
      <li>加入我们</li>
      <li>联系我们</li>
      <li>商业合作</li>
      <li>免责声明</li>
      <li>投诉建议</li>
    </ul>
    <p>Copyright © 2018  优选书城 All rights reserved</p>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer {
  background: #e6e6e6;
  color: #9c9c9c;
  font-size: 14px;
  padding: 1px 0;
  ul{
    padding: 0;
    text-align: center;
    li{
      display: inline-block;
      cursor: pointer;
      &:hover {
        color: black;
      }
      margin: 0 5px;
    }
  }
  p {
    text-align: center;
  }
}
</style>
