<template>
  <div class="author-detail">
    <div class="container">
      <div class="row mt-3">
        <div class="breadcrum">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
            <el-breadcrumb-item>Tác giả</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <hr />
      <div class="row mt-3">
        <div class="col-lg-3 col-md-3 col-sm-6">
          <BoxCategory />
        </div>
        <div class="col-lg-9 col-md-9 col-sm-6">
          <div class="row author-info">
            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
              <img class="author-img" src="/img/140946_4.jpg" alt="this is image author" />
            </div>
            <div class="col-lg-9 col-md-9 col-sm-6 col-12">
              <div class="author-name">
                <p>
                  <strong>Nguyễn Hữu Nam</strong>
                </p>
              </div>
              <div class="author-descript">
                <span>Lê Hữu Nam sinh ngày 01/03/1986 tại Đà Lạt. Nam sinh ra trong một gia đình chỉ có hai anh em trai, nhưng với chứng bệnh tim bẩm sinh không có vách ngăn liên thất, một căn bệnh không thể phẫu thuật triệt để, vậy nên ngay từ nhỏ sức của Nam rất yếu. Qua nhiều năm tháng điều trị, bệnh tình có nhiều biến chuyển, lúc khá hơn, lúc xấu đi nhưng đến nay Nam vẫn sống như một người bình thường; lập gia đình, sinh con có công việc của một phóng viên. Dù bệnh tim vẫn là một trở ngại lớn và khó đoán trước những bất trắc, song Nam vẫn kiên trì làm việc để lo tương lai cho con hết mức có thể. Hiện Nam đang công tác tại Tạp chí Tiếp Thị & Gia Đình.</span>
              </div>
              <div class="author-products">
                <h5>Sách đã xuất bản</h5>
                <ul class="list-product">
                  <li class="product" v-for="book in authorBooks" :key="book.id">
                    <a href="/product/1">{{ book.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row author-books mt-5">
            <h5 class="title">Sách của tác giả</h5>
            <div class="range-option">
              <el-select v-model="value" placeholder="Sắp xếp trạng thái sách">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <span class="pl-2">
                <i
                  :class="['range-item el-icon-menu', viewMode === 0 ? 'active': '']"
                  @click="handleChangeView(0)"
                ></i>
                <i
                  :class="['range-item fas fa-list-ul', viewMode === 1?'active': '']"
                  @click="handleChangeView(1)"
                ></i>
              </span>
            </div>
            <div class="list-book row">
              <div :class="viewClass" v-for="i in 6" :key="i">
                <ProductItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VIEW_MODE } from "../../contants";
import BoxCategory from "@/components/Asidebar/BoxCategory";
import ProductItem from "@/components/Products/ProductItem";

export default {
  name: "author-detail",
  components: {
    BoxCategory,
    ProductItem
  },
  data() {
    return {
      authorBooks: [
        { id: 1, name: "Hành trình trở về (2013)" },
        { id: 2, name: "Con đến như một phép màu (2014)" },
        { id: 3, name: "Mật ngữ rừng xanh (2015)" },
        { id: 4, name: "Xứ mộng hồn hoa (2015)" },
        { id: 5, name: "Những gam màu hồi sinh (2016)" },
        { id: 6, name: "Sài Gòn café ngọt đắng (2016)" },
        { id: 7, name: "Vì chưa bao giờ kết thúc (2016)" }
      ],
      options: [
        {
          value: "1",
          label: "Mới nhất"
        },
        {
          value: "2",
          label: "A đến Z"
        },
        {
          value: "3",
          label: "Z đến A"
        },
        {
          value: "4",
          label: "Giá thấp đến cao"
        },
        {
          value: "5",
          label: "Giá cao xuống thấp"
        },
        {
          value: "6",
          label: "Giảm giá cao xuống thấp"
        },
        {
          value: "7",
          label: "Giảm giá thấp đến cao"
        }
      ],
      value: "",
      viewClass: "col-lg-4 col-md-6 col-sm-6 col-12 mt-3",
      viewMode: VIEW_MODE.MULTI_COLUMN
    };
  },
  watch: {
    viewMode(val) {
      this.viewClass =
        val === VIEW_MODE.MULTI_COLUMN
          ? "col-lg-4 col-md-6 col-sm-6 col-12 mt-3"
          : "col-12";
    }
  },
  methods: {
    handleChangeView(viewOption) {
      this.viewMode = viewOption;
    }
  }
};
</script>
<style lang="scss">
@import "_id.scss";
</style>