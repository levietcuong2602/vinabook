<template>
  <div>
    <div class="content-header">
      <TopHeader />
      <MainHeader />
      <BottomHeader />
    </div>
    <div class="content-main">
      <nuxt />
    </div>
    <div class="content-footer">
      <SocialFooter />
      <TopFooter />
      <MainFooter />
      <BottomFooter />
    </div>
  </div>
</template>
<script>
import TopHeader from '@/components/Headers/TopHeader';
import MainHeader from '@/components/Headers/MainHeader';
import BottomHeader from '@/components/Headers/BottomHeader';

import SocialFooter from '@/components/Footers/SocialFooter';
import TopFooter from '@/components/Footers/TopFooter';
import MainFooter from '@/components/Footers/MainFooter';
import BottomFooter from '@/components/Footers/BottomFooter';

export default {
  components: {
    TopHeader,
    MainHeader,
    BottomHeader,
    TopFooter,
    MainFooter,
    BottomFooter,
    SocialFooter,
  }
}
</script>
