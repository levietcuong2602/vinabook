<template>
  <div class="product-box mt-4">
    <div class="title-box">
      <span class="box-title">{{ title }}</span>
      <a href="#" class="box-more">
        <span>Xem thêm</span>
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
    <div class="body-box row">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  props: {
    title: {
      type: String,
      default: "Sách giáo khoa mua nhiều"
    },
    products: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
@import "product_box.scss";
</style>

