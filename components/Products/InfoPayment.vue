<template>
  <div class="info-payment">
    <div class="header-box">
      <h5 class="title">Thông tin thanh toán</h5>
    </div>
    <div class="main-box">
      <div class="old-price">
        <span>Giá bìa</span>
        <span>95.000 đ</span>
      </div>
      <div class="new-price">
        <span>Giá bán</span>
        <span>65.000 đ</span>
      </div>
      <div class="save-money">
        <span>Tiết kiệm</span>
        <span>
          28.000 đ
          <span>(29%)</span>
        </span>
      </div>
      <div class="quality">
        <span>Chất lượng sách</span>
        <span>
          Loại A
          <span>?</span>
        </span>
      </div>
    </div>
    <div class="footer-box">
      <div class="status">
        <span class="text-success">
          <i class="fa fa-check-circle"></i>Còn hàng
        </span>
        <br />
        <span>chỉ còn 2 sản phẩm</span>
      </div>
      <div class="main-footer">
        <button type="button" class="buy-now" @click="handleBuyNow">
          <i class="fas fa-cart-plus"></i>Mua ngay
        </button>
      </div>
      <div class="bottom-footer">
        <button type="button" class="action">
          <i class="fa fa-heart"></i> Thích
        </button>
        <button type="button" class="action">
          <i class="fas fa-vote-yea"></i>Đã đọc
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoPayment",
  methods: {
    handleBuyNow() {
      window.location.href = "/payments/1";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./info_payment.scss";
</style>
