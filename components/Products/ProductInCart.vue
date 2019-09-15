<template>
  <div class="product-cart">
    <div class="row">
      <div class="col-lg-2 col-md-2 col-sm-2">
        <img
          class="product-img"
          src="https://www.vinabook.com/images/thumbnails/product/115x/282894_cham-lai-cung-con-thuong-thuc-thoi-tho-au.jpg"
          alt="this is image product in cart"
        />
      </div>
      <div class="col-lg-7 col-md-7 col-sm-7">
        <div class="product-name">
          <a href="/product/1">Bếp Gas Đơn Mặt Kính Chén Đồng Fujishi FR-268D - Hàng Chính Hãng</a>
        </div>
        <div class="provider">
          Cung cấp bởi:
          <a href="#">Alobuy Việt Nam</a>
        </div>
        <div class="action">
          <a href="/">Xóa</a>
          <a href="/">Để dành mua sau</a>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3">
        <div class="increate-product">
          <el-input-number v-model="num" :min="0" :max="12"></el-input-number>
        </div>
        <div class="price">
          <div class="regular-price">209.000 đ</div>
          <div class="pre-price">
            <span class="price1">290.000 đ</span>
            <el-divider direction="vertical"></el-divider>
            <span class="sale">-28%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductInCart",
  data() {
    return {
      num: 5
    };
  }
};
</script>
<style lang="scss">
@import "product_in_cart.scss";
</style>