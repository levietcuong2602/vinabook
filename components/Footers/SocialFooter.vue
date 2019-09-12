<template>
  <div class="social-footer mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-12 col-12 text-center">
          <p class="title">ĐĂNG KÝ NHẬN EMAIL</p>
          <p class="sub-title">Đăng ký nhận thông tin sách mới, sách bán</p>
        </div>
        <div class="col-lg-9 col-md-8 col-sm-12 col-12">
          <el-form class="row">
            <el-form-item class="col-lg-3 col-md-6 col-sm-12 col-12">
              <el-input placeholder="Enter your name"></el-input>
            </el-form-item>
            <el-form-item class="col-lg-3 col-md-6 col-sm-12 col-12">
              <el-input placeholder="Enter your email"></el-input>
            </el-form-item>
            <el-form-item class="col-lg-3 col-md-6 col-sm-12 col-12">
              <el-select placeholder="Thể loại yêu thích" :value="'all'">
                <el-option
                  v-for="type in foveristTypes"
                  :key="type.title"
                  :label="type.title"
                  :value="type.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="col-lg-3 col-md-6 col-sm-12 col-12">
              <el-button>ĐĂNG KÝ NGAY</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialFooter",
  data() {
    return {
      foveristTypes: [
        { title: "Tất cả", value: "all" },
        { title: "Sách Ngoại Văn", value: "739" },
        { title: "Sách Kinh Tế ", value: "348" },
        { title: "Sách Văn học Trong Nước", value: "353" },
        { title: "Sách Văn học Nước Ngoài", value: "354" },
        { title: "Sách Thường Thức – Đời Sống", value: "671" },
        { title: "Sách Thiếu Nhi", value: "525" },
        { title: "Sách Phát Triển Bản Thân", value: "668" },
        { title: "Sách Tin Học - Ngoại Ngữ", value: "669" },
        { title: "Sách Chuyên Ngành", value: "670" },
        { title: "Sách Giáo Khoa - Giáo Trình", value: "357" },
        { title: "Tạp chí - Văn phòng phẩm", value: "851" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.social-footer {
  background-color: #0a6f3c;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  .title {
    margin: 0;
    font-weight: 600;
    font-size: 95%;
  }
  .sub-title {
    margin: 0;
    font-size: 85%;
    font-weight: 500;
  }
}
</style>
