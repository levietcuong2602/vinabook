<template>
  <div class="product-detail">
    <div class="container">
      <div class="row pt-3">
        <div class="breadcrum">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
            <el-breadcrumb-item>Sách kinh tế</el-breadcrumb-item>
            <el-breadcrumb-item>Ngôn ngữ của thành công</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <hr />
      <div class="row mt-3">
        <div class="col-md-9 col-sm-6 col-12 detail">
          <div class="row">
            <div class="col-md-4 col-sm-12">this is image</div>
            <div class="col-md-8 col-sm-12">
              <div class="book-detail">
                <h5 class="title">{{ bookTitle }}</h5>
                <div class="author">
                  <strong>Tác giả:</strong>
                  {{ author }}
                </div>
                <div class="producer-book">
                  <strong>Nhà xuất bản:</strong>
                  {{ producerBook }}
                </div>
                <div class="public-book">
                  <strong>Nhà phát hành:</strong>
                  {{ publicBook }}
                </div>
                <FbLike />
                <div class="detail">
                  <p>{{ detail }}</p>
                  <span>
                    <a href="#">Xem thêm</a>
                  </span>
                </div>
                <div class="sub-title">Thông tim kèm theo</div>
                <ul class="info-logistic">
                  <li>
                    <strong>Có dịch vụ bọc sách plastic cao cấp cho sách này</strong>
                    <a href="#">Chi tiết</a>
                  </li>
                  <li>
                    Miễn phí giao hàng toàn quốc cho Đơn hàng từ 250.000đ (Áp dụng từ 1/2/2015.
                    <a
                      href="#"
                    >Xem chi tiết</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row"></div>
        </div>
        <div class="col-md-3 col-sm-6 col-12 info">
          <InfoPayment />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InfoPayment from "@/components/Products/InfoPayment";
import FbLike from "@/components/Headers/FbLike";

export default {
  name: "ProductDetail",
  components: {
    InfoPayment,
    FbLike
  },
  data() {
    return {
      bookTitle: "Bộ Sách Giáo Khoa Lớp 1 (2019) - Bài Học (Bộ 6 Cuốn)",
      author: "Nhiều tác giả",
      producerBook: "NXB Giáo Dục",
      publicBook: "Fahasa",
      detail:
        '"Đây là tập văn trào phúng thứ hai của anh sau tập phiếm luận "Người Việt biết đùa" (2008) hay cũng có thể coi là quyển "Người Việt biết đùa" tập 2. Bởi vì xét cho cùng, thế giới mà lâu nay cả anh và tôi và chúng ta đang sống khi nào chẳng đầy ...'
    };
  }
};
</script>
<style lang="scss" scoped>
.product-detail {
  background-color: #fff;

  .book-detail {
    .sub-title {
      width: 100%;
      border-top: 1px dashed #c7c7c7;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
      color: #000000;
      line-height: 1.2;
      text-align: left;
      float: left;
      margin-top: 15px;
      padding-top: 15px;
      margin-bottom: 10px;
    }
    .info-logistic {
      margin: 0;
      margin-top: 0;
      float: left;
      width: 100%;
      padding: 0px;
      li {
        list-style: none;
        margin-top: 5px;
        padding-left: 25px;
        color: #22242d;
        font-size: 12px;
        font-family: "Roboto", sans-serif;
        line-height: 1.667;
        background: url(/img/dot_check.png) left 2px no-repeat;
      }
    }
  }
}
</style>
