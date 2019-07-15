<template>
  <div class="top-banner">
    <a :href="img1">
      <img
        :src="img1"
        alt="top banner"
      >
    </a>
    <a :href="img2">
      <img
        :src="img2"
        alt="top banner"
      >
    </a>
  </div>
</template>
<script>
export default {
  name: 'TopBanner',
  props: {
    img1: {
      type: String,
      default: 'https://www.vinabook.com/images/thumbnails/promo/802x480/339082_desktop.jpg',
    },
    img2: {
      type: String,
      default: 'https://www.vinabook.com/images/thumbnails/promo/802x480/341784_desktopbxm6-a7.jpg'
    },
  }
}
</script>
