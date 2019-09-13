<template>
  <div class="flip-countdown">
    <no-ssr>
      <flip-countdown deadline="2019-12-25 00:00:00"></flip-countdown>
    </no-ssr>
  </div>
</template>
<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
  name: "Countdown",
  components: { FlipCountdown }
};
</script>
<style lang="scss" scoped>
.flip-countdown {
  position: absolute;
  bottom: 15px;
}
</style>

