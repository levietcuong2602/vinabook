<template>
  <div class="main-app">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-3 col-sm-6 col-12 d-none d-md-block">
          <TopBanner />
        </div>
        <div class="col-md-6 col-sm-12 col-12">
          <CarouselBanner />
        </div>
        <div class="col-md-3 col-sm-6 col-12 d-none d-md-block">
          <TopBanner />
        </div>
      </div>
      <BottomBanner />
      <div class="row mt-3">
        <div class="col-md-9 col-sm-6 col-12">
          <FlashSale />
          <div class="row mt-3">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </div>
          <!-- SGK mua nhiều -->
          <ProductBox title="Sách Giáo Khoa Mua Nhiều">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </ProductBox>
          <!-- Sách Bán Chạy 06/2019 -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </ProductBox>

          <!-- Sách Văn Học Mới -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </ProductBox>
          <!-- Tác Giả Nổi Bật -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </ProductBox>
          <!-- Sách Kinh Tế Mới -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </ProductBox>
          <!-- Sách Nuôi Dạy Trẻ -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </ProductBox>
          <!-- Sách Thiếu Nhi Mới -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </ProductBox>
          <!-- Sách Kỹ Năng -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <ProductItem
              v-for="i in 6"
              :key="i"
            />
          </ProductBox>
          <!-- Sách Vừa Xem -->
          <ProductBox title="Sách Bán Chạy 06/2019">
            <ProductItem
              v-for="i in 5"
              :key="i"
            />
          </ProductBox>
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          this iss asidebar
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselBanner from '@/components/Home/Banners/CarouselBanner';
import TopBanner from '@/components/Home/Banners/TopBanner';
import BottomBanner from '@/components/Home/Banners/BottomBanner';
import FlashSale from '@/components/Home/CountDown/FlashSale';
import ProductItem from '@/components/Products/ProductItem';
import ProductBox from '@/components/Products/ProductBox';

export default {
  components: {
    CarouselBanner,
    TopBanner,
    BottomBanner,
    FlashSale,
    ProductItem,
    ProductBox,
  }
}
</script>