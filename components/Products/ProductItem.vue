<template>
  <a href="/product/1" class="product-item">
    <div class="product-wrap">
      <div class="book-info">
        <div class="pict-book">
          <img :src="bookInfo.img" alt="book image" class="img-product" />
          <img src="img/icon-flash-sale.png" alt="icon flash sale" class="icon-sale" />
        </div>
        <div class="text-info">
          <p class="product-title">{{ bookInfo.title }}</p>
          <span class="product-author">{{ bookInfo.author }}</span>
          <hr />
          <p class="product-content">{{ bookInfo.content }}</p>
        </div>
      </div>
      <div class="price-book">
        <div class="sale">
          <span>{{ bookInfo.sales }}</span>
        </div>
        <div class="price">
          <span class="old-price">{{ bookInfo.oldPrice }} đ</span>
          <span class="final-price">{{ bookInfo.finalPrice }} đ</span>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "Product",
  props: {
    bookInfo: {
      type: Object,
      default: () => ({
        id: "product_form_27700078635",
        img:
          "https://www.vinabook.com/images/thumbnails/product/115x/282894_cham-lai-cung-con-thuong-thuc-thoi-tho-au.jpg",
        title: "Chậm Lại Cùng Con Thưởng Thức Thời Thơ Ấu",
        author: "Nhiêu Tuyết Lị",
        content:
          "Đây là cuốn sách nói về cách cha mẹ làm thế nào để giáo dục và bầu bạn cùng...",
        oldPrice: "85.000",
        finalPrice: "60.000",
        sales: "-29%"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "product_item.scss";
</style>
