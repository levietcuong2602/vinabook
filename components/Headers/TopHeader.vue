<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <span id="popover-1">
            <i class="fas fa-truck"></i> Miễn phí giao hàng
            <b-popover
              :target="`popover-1`"
              :placement="`bottomleft`"
              triggers="hover focus"
              :content="popup.freeShip"
            ></b-popover>
          </span>
          <el-divider direction="vertical"></el-divider>
          <span id="popover-2">
            <i class="fas fa-book"></i> 80.000 tựa sách
            <b-popover
              :target="`popover-2`"
              :placement="`bottomleft`"
              triggers="hover focus"
              :content="popup.bookCate"
            ></b-popover>
          </span>
          <el-divider direction="vertical"></el-divider>
          <span id="popover-3">
            <i class="fas fa-mobile-alt"></i> Vinabook Reader
            <b-popover
              :target="`popover-3`"
              :placement="`bottomleft`"
              triggers="hover focus"
              :content="popup.vinaReader"
            ></b-popover>
          </span>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12 text-left d-none d-md-block">
          <FbLike />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FbLike from "./FbLike";

export default {
  name: "TopHeader",
  components: {
    FbLike
  },
  data() {
    return {
      popup: {
        freeShip: "Miễn phí giao hàng toàn quốc cho Đơn hàng từ 250.000đ.",
        bookCate:
          "Với hơn 80,000 đầu sách trong mọi lĩnh vực (và tiếp tục tăng mỗi ngày), Vinabook.com tự hào là nhà sách trên mạng có số lượng đầu sách lớn nhất Việt Nam, bạn có thể tìm được bất kỳ quyển sách nào cho mọi nhu cầu đọc sách của bạn.",
        vinaReader:
          "Hơn 10,000 tựa sách và tạp chí trong thư viện sách khổng lồ của Vinabook Reader mọi lúc mọi nơi chỉ từ 825đ/ngày"
      }
    };
  }
};
</script>
<style scoped lang="scss">
.top-header {
  background-color: #f3f3f3;
  span {
    cursor: pointer;
    color: #66645c;
    font-size: 85%;
  }
}
</style>

