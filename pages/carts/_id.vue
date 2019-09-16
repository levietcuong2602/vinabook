<template>
  <div class="cart-info">
    <div class="container">
      <div class="row mt-4">
        <h5 class="text-success">Giỏ hàng của bạn</h5>
      </div>
      <div class="row mt-4">
        <div class="col-lg-8 col-md-8 col-sm-12 col-12">
          <div class="box-list-cart">
            <div class="box-main">
              <ProductInCart v-for="item in 3" :key="item" />
            </div>
            <div class="box-footer text-center mt-3">
              <el-button type="primary" @click="handleBackPage">
                <i class="el-icon-back"></i> Quay lại
              </el-button>
              <el-button type="success" @click="handleBuyNow">
                Thanh toán
                <i class="el-icon-right"></i>
              </el-button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <div class="box-order-total mt-1">
            <div class="box-title">
              <h5>TÓM TẮT ĐƠN HÀNG</h5>
            </div>
            <div class="box-main">
              <div class="item">
                <span>Sản phẩm:</span>
                <span>5</span>
              </div>
              <div class="item">
                <span>Phí vận chuyển:</span>
                <span>Miễn phí</span>
              </div>
              <div class="item">
                <span>Tạm tính:</span>
                <span>120.000 đ</span>
              </div>
            </div>
            <hr />
            <div class="box-footer">
              <div class="item">
                <span>Tổng:</span>
                <span>112.000 ₫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductInCart from "@/components/Products/ProductInCart";
export default {
  name: "CartListPage",
  components: {
    ProductInCart
  },
  methods: {
    handleBuyNow() {
      window.location.href = "/payments/1";
    },
    handleBackPage() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "_id.scss";
</style>