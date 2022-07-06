<!--
 * @Description: 
 * @Version: 2.0
 * @Author: wuyue.nan
 * @Date: 2022-07-06 14:00:34
 * @LastEditors: wuyue.nan
 * @LastEditTime: 2022-07-06 14:12:19
-->
<template>
  <div>
    <div v-if="test" class="box">小于1366</div>
    <div v-if="!test" class="box">大于了1366</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: true,
    };
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    getWidth() {
      let innerWidth = window.innerWidth;
      console.log("innerWidth ==> ", innerWidth);
      if (innerWidth > 1366) {
        this.test = false;
      } else {
        this.test = true;
      }
    },
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: aqua;
}
@media screen and (min-width: 1366px) {
  .box {
    background: salmon;
  }
}
</style>
