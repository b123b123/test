<!--
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-11-09 10:39:39
 * @LastEditors: WangBo
 * @LastEditTime: 2022-11-09 10:59:51
-->
<template>
  <div>测试</div>
</template>

<script>
// import { test, default as nihao } from "../utils/index1";
// import { nihao as test } from "../utils/index1";
import * as test from "../utils/index1";
export default {
  mounted() {
    console.log(test);
    // test.obj.attr = "666";
    // console.log(test);
    // console.log(nihao);
  },
};
</script>
