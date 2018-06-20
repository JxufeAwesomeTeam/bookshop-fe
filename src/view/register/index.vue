<template>
  <div class="login">
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from './uiComponents/Form'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.test {
  height: 50px;
  width: 100px;
  border: 1px solid red;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
  overflow: hidden;
}
</style>
