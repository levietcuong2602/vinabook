<template>
  <div class="layout">
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
    <DialogLogin />
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

import DialogLogin from '@/components/Dialog/DialogLogin';

export default {
  components: {
    TopHeader,
    MainHeader,
    BottomHeader,
    TopFooter,
    MainFooter,
    BottomFooter,
    SocialFooter,
    DialogLogin,
  },
}
</script>
<style lang="scss" scoped>
.content-main {
  background-color: #f3f3f3;
}
</style>
