<template>
  <div class="category">
    <p class="title">
      <strong>DANH MỤC</strong>
    </p>
    <ul class="category-list">
      <li class="category-item" v-for="item in items" :key="item.id">
        <a href="/">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { menu } from "@/data/category-product.js";
export default {
  name: "BoxCategory",
  data() {
    return {
      items: menu
    };
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding: 0px;
}
li {
  list-style: none;
  margin-bottom: 0.3em;
  text-align: left;
  margin: 0;
}
.category {
  border: 1px solid #e5e5e5;
  padding: 0;
  padding-bottom: 15px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
  // margin-top: 20px;
  background-color: #fff;
  border-radius: 3px;
  // padding-top: 10px;
  .title {
    border-bottom: 1px dashed #e6e6e6;
    padding: 10px 15px;
    margin: 0px;
  }
  .category-list {
    .category-item {
      padding: 5px 15px;
      border-bottom: 1px dashed #e6e6e6;
      background: transparent;
      background-size: 5px;
      font-weight: 500;
      background: url(/img/right-arow_2x.png) 260px no-repeat;
      a {
        color: #000;
      }
    }
  }
}
</style>