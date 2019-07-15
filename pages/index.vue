<template>
  <div class="main-app">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-12">
          <TopBanner />
        </div>
        <div class="col-md-6 col-sm-6 col-12">
          <CarouselBanner />
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <TopBanner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselBanner from '@/components/Home/Banners/CarouselBanner';
import TopBanner from '@/components/Home/Banners/TopBanner';

export default {
  name: 'CarouselBanner',
  components: {
    CarouselBanner,
    TopBanner
  }
}
</script>