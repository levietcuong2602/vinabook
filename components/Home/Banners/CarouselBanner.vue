<template>
  <el-carousel>
    <el-carousel-item
      v-for="img in imgs"
      :key="img.img"
    >
      <img
        :src="img.img"
        alt="image-1"
        style="width: 100%; height: 100%;"
      >
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'CarouselBanner',
  data() {
    return {
      imgs: [
        { img: 'https://www.vinabook.com/images/thumbnails/promo/802x480/342416_desktop.jpg' },
        { img: 'https://www.vinabook.com/images/thumbnails/promo/802x480/341780_desktopw4sd-88.jpg' },
        { img: 'https://www.vinabook.com/images/thumbnails/promo/802x480/340762_desktop2ggd-xl.jpg' }
      ]
    }
  }
}
</script>
