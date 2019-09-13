<template>
  <div class="flash-sale">
    <img src="/img/banner_flashsale.png" alt="banner flash-sale" />
    <!-- <vac>
      <vac :end-time="new Date().getTime() + 60000">
        <span
          slot="process"
          slot-scope="{ timeObj }"
        >{{ `Lefttime: ${timeObj.m}:${timeObj.s}` }}</span>
        <span slot="finish">Done!</span>
      </vac>
    </!-->
    <CountDown />
  </div>
</template>
<script>
import CountDown from "./CountDown";

export default {
  name: "FlashSale",
  components: {
    CountDown
  },
  data() {
    return {
      timeObj: {
        endTime: 1542634411361,
        speed: 1000,
        leftTime: 97019,
        d: "0",
        h: "00",
        m: "01",
        s: "37",
        ms: "019",
        org: {
          d: 0.001134247685185185,
          h: 0.02722194444444444,
          m: 1.6333166666666665,
          s: 37.998999999999995,
          ms: 19
        },
        ceil: {
          d: 1,
          h: 1,
          m: 2,
          s: 98
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.flash-sale {
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
