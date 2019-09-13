<template>
  <div class="row mt-1">
    <div class="col-md-3 col-sm-6 col-6" v-for="img in imgs" :key="img">
      <b-img :src="img" :alt="img" fluid></b-img>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomBanner",
  data() {
    return {
      imgs: [
        "/img/340790_desktop2fp0-tg.jpg",
        "/img/341252_desktop.jpg",
        "/img/341782_desktopxh3g-1m.jpg",
        "/img/341784_desktopbxm6-a7.jpg"
      ]
    };
  }
};
</script>

