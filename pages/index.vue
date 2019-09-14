<template>
  <div class="main-app">
    <div class="container">
      <!-- banner -->
      <div class="row mt-3">
        <div class="col-lg-3 d-none d-lg-block">
          <TopBanner />
        </div>
        <div class="col-lg-6 col-md-12">
          <CarouselBanner />
        </div>
        <div class="col-lg-3 d-none d-lg-block">
          <TopBanner />
        </div>
      </div>
      <BottomBanner />
      <!-- end banner -->
      <div class="row mt-3">
        <div class="col-lg-9 col-md-8 col-sm-12 col-12">
          <FlashSale />
          <div class="row mt-3">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </div>
          <!-- SGK mua nhiều -->
          <ProductBox title="Sách Giáo Khoa Mua Nhiều">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>
          <!-- Sách Bán Chạy 06/2019 -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>

          <!-- Sách Văn Học Mới -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>
          <!-- Tác Giả Nổi Bật -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>
          <!-- Sách Kinh Tế Mới -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>
          <!-- Sách Nuôi Dạy Trẻ -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>
          <!-- Sách Thiếu Nhi Mới -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>
          <!-- Sách Kỹ Năng -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>
          <!-- Sách Vừa Xem -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt-3" v-for="i in 6" :key="i">
              <ProductItem />
            </div>
          </ProductBox>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 col-12">
          <AsidebarBox title="Sách Bán Chạy Trong Tuần">
            <SidebarItem v-for="i in 5" :key="i" />
          </AsidebarBox>
          <AsidebarBox title="Sách Bán Chạy Trong Tuần">
            <SidebarItem v-for="i in 5" :key="i" />
          </AsidebarBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselBanner from "@/components/Home/Banners/CarouselBanner";
import TopBanner from "@/components/Home/Banners/TopBanner";
import BottomBanner from "@/components/Home/Banners/BottomBanner";
import FlashSale from "@/components/Home/CountDown/FlashSale";
import ProductItem from "@/components/Products/ProductItem";
import ProductBox from "@/components/Products/ProductBox";
import AsidebarBox from "@/components/Asidebar/AsidebarBox";
import SidebarItem from "@/components/Asidebar/SidebarItem";

export default {
  components: {
    CarouselBanner,
    TopBanner,
    BottomBanner,
    FlashSale,
    ProductItem,
    ProductBox,
    SidebarItem,
    AsidebarBox
  },
  updated: function() {
    this.$refs.treeExplorer.goSlide(this.$refs.treeExplorer.currentIndex);
  },
  head() {
    return {
      title: "About Us - Nuxt.js",
      meta: [{ hid: "description", name: "description", content: "Home" }]
    };
  }
};
</script>