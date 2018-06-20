<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'IndexSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: 1,
          imgUrl: 'https://yanxuan.nosdn.127.net/85554fafa67543ca551039ed891f9387.jpg?quality=95&thumbnail=1920x420&imageView'
        },
        {
          id: 2,
          imgUrl: 'https://yanxuan.nosdn.127.net/c9826484a34db40145b25773224cbf30.jpg?quality=95&thumbnail=1920x420&imageView'
        },
        {
          id: 3,
          imgUrl: 'https://yanxuan.nosdn.127.net/082c1bc3da42090794b0d6f9caf8cc1f.jpg?quality=95&thumbnail=1920x420&imageView'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 420px;
  width: 100%;
}
</style>
