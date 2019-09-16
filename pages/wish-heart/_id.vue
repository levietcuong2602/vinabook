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
          <div class="row author-books">
            <h5 class="title">Sản phẩm yêu thích của bạn</h5>
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
              <div :class="viewClass" v-for="i in 9" :key="i">
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