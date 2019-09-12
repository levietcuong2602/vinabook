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
            <div class="col-md-4 col-sm-12">
              <div class="pre-view">
                <a href="#">
                  <img src="/img/icon_xemtruoc_2x.png" alt="Xem trich doan" />
                </a>
              </div>
              <div class="row">
                <div @click="() => showImg()" style="width: 100%;">
                  <img :src="product.img" style="width: 100%; height: 100%;" />
                </div>
                <vue-easy-lightbox :visible="visible" :imgs="product.img" @hide="handleHide"></vue-easy-lightbox>
              </div>
              <div class="row">
                <div class="img-small-wrap">
                  <ThumbnailZoom v-for="img in product.thumbnail" :key="img" :img="img" />
                </div>
              </div>
            </div>
            <div class="col-md-8 col-sm-12">
              <div class="book-detail">
                <h5 class="title">{{ bookTitle }}</h5>
                <div class="author">
                  <strong>Tác giả:</strong>
                  {{ authorInf }}
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
        </div>
        <div class="col-md-3 col-sm-6 col-12 info">
          <InfoPayment />
        </div>
      </div>
      <div class="row mt-3">
        <nav class="nav-product navbar navbar-expand-lg bg-light mb-5">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" v-scroll-to="'#introduction'">Giới thiệu sách</a>
            </li>
            <el-divider direction="vertical"></el-divider>
            <li class="nav-item active">
              <a class="nav-link" href="#" v-scroll-to="'#product-details-box'">Thông tin chi tiết</a>
            </li>
            <el-divider direction="vertical"></el-divider>
            <li class="nav-item active">
              <a class="nav-link" href="#" v-scroll-to="'#comment'">Đánh giá và bình luận</a>
            </li>
          </ul>
        </nav>
        <div class="row">
          <div class="col-md-9 col-sm-6 col-12">
            <div id="introduction">
              <p>
                <strong>Em Luôn Đúng, Em Yêu!</strong>
              </p>
              <p>“Em luôn đúng, em yêu !” xoay quay tình yêu của hai nhân vật là Trần Thước và Dư Điền Điền. Trần Thước là bác sĩ khoa Ngoại, đẹp trai, giỏi giang nhưng độc mồm độc miệng. Anh mạnh mẽ gai góc bên ngoài nhưng thực sự lại cô đơn và tổn thương bên trong. Dư Điền Điền là y tá khoa Nhi, một cô gái tự lập, miệng lưỡi sắc bén và vô cùng lương thiện. Hai con người cứ hễ gặp nhau là đấu khẩu, nhưng cũng chính từ những lần đấu khẩu ấy, họ phát hiện và hiểu ra con người thật của đối phương, cứ thế tình cảm của họ chuyển từ ghét, hận sang thương yêu.</p>
              <p>
                <strong>Mời bạn đón đọc.</strong>
              </p>
            </div>
            <div id="product-details-box">
              <p>
                <strong>Thông tin chi tiết</strong>
              </p>
              <ul class="product-feature">
                <li>
                  <strong>Tác giả:</strong>
                  <span>Dung Quang</span>
                </li>
                <li>
                  <strong>Nhà xuất bản:</strong>
                  <span>Nxb văn học</span>
                </li>
                <li>
                  <strong>Mã Sản phẩm:</strong>
                  <span>9786049699375</span>
                </li>
                <li>
                  <strong>Ngôn ngữ:</strong>
                  <span>Tiếng Việt</span>
                </li>
                <li>
                  <strong>Kích thước:</strong>
                  <span>14.5 x 20.5 cm</span>
                </li>
                <li>
                  <strong>Số trang:</strong>
                  <span>572</span>
                </li>
                <li>
                  <strong>Người dịch:</strong>
                  <span>Tuyết Mai</span>
                </li>
                <li>
                  <strong>Nhà phát hành:</strong>
                  <span>BachvietBooks</span>
                </li>
                <li>
                  <strong>Khối lượng:</strong>
                  <span>682.00 gam</span>
                </li>
                <li>
                  <strong>Định dạng:</strong>
                  <span>Bìa mềm</span>
                </li>
                <li>
                  <strong>Ngày phát hành:</strong>
                  <span>21/03/2019</span>
                </li>
              </ul>
            </div>
            <div id="comment">
              <p>
                <strong>Đánh giá và bình luận</strong>
              </p>
              <div class="row box-total-rating">
                <div class="col-md-8 col-sm-12 box-rating">
                  <div class="title-rating">
                    <div class="title">Đánh giá trung bình</div>
                    <div class="rating-count">( {{ 0 }} - người đánh giá )</div>
                    <div class="score">0.0</div>
                  </div>
                  <div class="main-rating">
                    <div class="star">
                      <div class="title">
                        1
                        <i class="el-icon-star-on text-warning"></i>
                      </div>
                      <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                    </div>
                    <div class="star">
                      <div class="title">
                        2
                        <i class="el-icon-star-on text-warning"></i>
                      </div>
                      <el-progress
                        :text-inside="true"
                        :stroke-width="24"
                        :percentage="100"
                        status="success"
                      ></el-progress>
                    </div>
                    <div class="star">
                      <div class="title">
                        3
                        <i class="el-icon-star-on text-warning"></i>
                      </div>
                      <el-progress
                        :text-inside="true"
                        :stroke-width="22"
                        :percentage="80"
                        status="warning"
                      ></el-progress>
                    </div>
                    <div class="star">
                      <div class="title">
                        4
                        <i class="el-icon-star-on text-warning"></i>
                      </div>
                      <el-progress
                        :text-inside="true"
                        :stroke-width="20"
                        :percentage="50"
                        status="exception"
                      ></el-progress>
                    </div>
                    <div class="star">
                      <div class="title">
                        5
                        <i class="el-icon-star-on text-warning"></i>
                      </div>
                      <el-progress :text-inside="true" :stroke-width="20" :percentage="50"></el-progress>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 box-register">
                  <p>Đăng nhập để gửi nhận xét của bạn</p>
                  <div class="login">
                    <el-button type="success" @click="showDialogLogin">Đăng nhập</el-button>
                  </div>
                  <div class="register">
                    <span>Bạn chưa có tài khoản?</span>
                    <span>
                      Hãy
                      <a href="/register">Đăng ký</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="comment-fb">
                <p>
                  <strong>Bình luận từ facebook</strong>
                </p>
                <div id="fb-root"></div>
                <script
                  async
                  defer
                  crossorigin="anonymous"
                  src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v4.0&appId=1803285379816767&autoLogAppEvents=1"
                ></script>
                <div
                  class="fb-comments"
                  data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                  data-width
                  data-numposts="5"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <div class="box-author">
              <div class="title">Thông tin tác giả</div>
              <div class="author-description">
                <div class="author-name">{{ author.name }}</div>
                <ul class="author-link">
                  <li>
                    <a class="readmore" href="/author/1">Vào trang riêng của tác giả</a>
                  </li>
                  <li>
                    <a class="readmore" href="/author/1">Xem tất cả các sách của tác giả</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InfoPayment from "@/components/Products/InfoPayment";
import FbLike from "@/components/Headers/FbLike";
import ThumbnailZoom from "@/components/Products/ThumbnailZoom";

export default {
  name: "ProductDetail",
  components: {
    InfoPayment,
    FbLike,
    ThumbnailZoom
  },
  data() {
    return {
      bookTitle: "Bộ Sách Giáo Khoa Lớp 1 (2019) - Bài Học (Bộ 6 Cuốn)",
      authorInf: "Nhiều tác giả",
      producerBook: "NXB Giáo Dục",
      publicBook: "Fahasa",
      detail:
        '"Đây là tập văn trào phúng thứ hai của anh sau tập phiếm luận "Người Việt biết đùa" (2008) hay cũng có thể coi là quyển "Người Việt biết đùa" tập 2. Bởi vì xét cho cùng, thế giới mà lâu nay cả anh và tôi và chúng ta đang sống khi nào chẳng đầy ...',
      author: {
        id: "1",
        name: "Nguyễn Lê"
      },
      imgs: [
        "https://via.placeholder.com/450.png/",
        "https://via.placeholder.com/300.png/",
        "https://via.placeholder.com/150.png/"
      ],
      visible: false
    };
  },
  methods: {
    showDialogLogin() {
      const isLogin = this.getDialogLoginVisible;
      this.$store.dispatch("changeDialogLoginVisible", !isLogin);
    },
    showImg() {
      // this.index = index
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  },
  props: {
    product: {
      type: Object,
      default: () => ({
        id: "10142975",
        img:
          "https://salt.tikicdn.com/cache/200x200/ts/product/54/0d/0d/391f8ffc33dd8e63dc7d339451f11eb7.jpg",
        thumbnail: [
          "https://salt.tikicdn.com/cache/64x64/ts/product/54/0d/0d/391f8ffc33dd8e63dc7d339451f11eb7.jpg",
          "https://salt.tikicdn.com/cache/64x64/ts/product/74/6b/2e/4352b235cf2e5b58ec760e4f364228bb.jpg"
        ]
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "_id.scss";
</style>
