<template>
  <div class="nav">
    <ul class="type">
      <router-link to="/" tag="li">推荐</router-link>
      <router-link to="/python" tag="li">Python</router-link>
      <router-link to="/java" tag="li">Java</router-link>
      <router-link to="/php" tag="li">PHP</router-link>
      <li>Go</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>机器学习</li>
      <li>人工智能</li>
    </ul>
    <ul class="other">
      <router-link to="/share" tag="li" class="active">分享</router-link>
      <router-link to="/select" tag="li">精选</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'IndexNav'
}
</script>
<style lang="scss" scoped>
.nav {
  width: 1080px;
  height: 43px;
  margin: 0 auto;
  position: relative;
  ul {
    list-style-type:none;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    li {
      display: inline-block;
      line-height: 30px;
      margin: 0 10px;
      font-family: "Heiti SC","Lucida Grande","Hiragino Sans GB","Hiragino Sans GB W3",verdana;
      font-weight: 700;
      color: #4a4a4a;
      font-size: 15px;
      padding-bottom: 1px;
      cursor: pointer;
      &:hover {
        color: #33cc99;
      }
    }
  }
  .type {
    position: absolute;
    left: 0;
  }
  .other {
    position: absolute;
    right: 0;
  }
  .active {
    border-bottom: 3px solid #33cc99;
    color: #33cc99;
  }
}
</style>
