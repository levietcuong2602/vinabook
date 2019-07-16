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
    </div>
  </div>
</template>

<script>
import CarouselBanner from '@/components/Home/Banners/CarouselBanner';
import TopBanner from '@/components/Home/Banners/TopBanner';
import BottomBanner from '@/components/Home/Banners/BottomBanner';

export default {
  components: {
    CarouselBanner,
    TopBanner,
    BottomBanner
  }
}
</script>