<template>
  <div id="app">
    <Banner />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from 'common/footer/footer'
import Banner from 'common/banner/banner'
export default {
  name: 'App',
  components: {
    Banner,
    Footer
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
</style>
