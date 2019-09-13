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
        <div class="col-lg-9 col-md-9 col-sm-6">this is infor authro</div>
      </div>
    </div>
  </div>
</template>
<script>
import BoxCategory from "@/components/Asidebar/BoxCategory";

export default {
  name: "author-detail",
  components: {
    BoxCategory
  }
};
</script>
<style lang="scss">
@import "_id.scss";
</style>