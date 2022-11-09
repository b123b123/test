<!--
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-11-09 10:39:39
 * @LastEditors: WangBo
 * @LastEditTime: 2022-11-09 13:39:52
-->
<template>
  <div>测试</div>
</template>

<script>
export default {
  async mounted() {
    let test = true;
    console.log(1);
    if (test) {
      console.log(2);
      // import("../utils/index1").then(({ hello: test }) => {
      //   console.log(test);
      //   console.log(5);
      // });
      let test = await import("../utils/index1");
      console.log(test);
      console.log(3);
    }
    console.log(4);
  },
};
</script>
