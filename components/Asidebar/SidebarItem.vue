<template>
  <div class="col-lg-12 col-md-12 col-sm-6 col-12">
    <a href="#">
      <div class="row mt-1">
        <div class="col-lg-4 col-md-4 col-sm-5 col-4">
          <div class="sidebar-pict">
            <img
              :src="product.img"
              alt="image"
            >
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-7 col-8">
          <p class="title">{{ product.title }}</p>
          <p class="author">{{ product.author }}</p>
          <div class="rate">
            <el-rate
              v-model="product.rate"
              disabled
            ></el-rate>
          </div>
          <div class="price">
            <span class="old-price">{{ product.oldPrice }} đ</span>
            <span class="final-price">{{ product.finalPrice }} đ</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'AsidebarItem',
  props: {
    product: {
      type: Object,
      default: () => ({
        id: 'product_form_27700064389',
        img: 'https://www.vinabook.com/images/thumbnails/product/115x/185968_ngoc-sang-trong-hoa-sen-tai-ban-2015.jpg',
        title: 'Ngọc Sáng Trong Hoa Sen (Tái Bản 2015)',
        author: 'John Blofeld',
        oldPrice: '96.000',
        finalPrice: '68.000',
        rate: 5,
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "sidebar_item.scss";
</style>
