<template>
  <div class="bar">
    <ul>
      <li :class="active ? 'aa' : 'ss'">最热</li>
      <li>最新</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'IndexChoose',
  data () {
    return {
      active: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .bar{
    width: 1080px;
    height: 10px;
    margin: 0 auto;
    position: relative;
}
ul {
  list-style: none;
  position: absolute;
  left: 0;
  padding: 0;
  li {
    font-size: 17px;
    display: inline-block;
    margin-right: 20px;
    color: #4a4a4a;
    cursor: pointer;
  }
  .active {
    color: #33cc99;
  }
}
</style>
