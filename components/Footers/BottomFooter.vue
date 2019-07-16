<template>
  <div class="bottom-footer mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-6 bfoo-left">
          <a href="#">
            <img
              src="/img/logo_so_cong_thuong.png"
              alt="logo so cong thuong"
            >
          </a>
        </div>
        <div class="col-md-5 col-sm-6 col-6 bfoo-center">
          <p>CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ MÊ KÔNG COM</p>
          <span>Địa chỉ: 52/2 Thoại Ngọc Hầu, Phường Hòa Thạnh, Quận Tân Phú, Hồ Chí Minh</span> <br>
          <span>MST: 0303615027 do Sở Kế Hoạch Và Đầu Tư Tp.HCM cấp ngày 10/03/2011</span> <br>
          <span>Tel: 028.73008182 - Fax: 028.39733234 - Email: <a href="#">hotro@vinabook.com</a></span> <br>
        </div>
        <div class="col-md-4 col-sm-6 col-6 bfoo-right">
          <p>WEBSITE CÙNG HỆ THỐNG</p>
          <div class="logo-web-system">
            <figure>
              <a href="#">
                <img
                  src="/img/logo_hotdeal_2x.png"
                  alt="logo hotdeal"
                >
              </a>
            </figure>
            <figure>
              <a href="#">
                <img
                  src="/img/logo_yesgo_2x.png"
                  alt="logo hotdeal"
                >
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomFooter'
}
</script>
<style scoped lang="scss">
.bottom-footer {
  background-color: #ececec;
  padding: 10px 0px;
  border-top: 1px solid #d4c1c1;
  .bfoo-center {
    p {
      font-size: 90%;
      font-weight: 500;
    }
    span {
      font-size: 85%;
    }
  }
  .bfoo-right {
    p {
      font-size: 90%;
      font-weight: 500;
    }

    .logo-web-system {
      display: flex;
      justify-content: space-between;
      figure {
        width: 45%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
