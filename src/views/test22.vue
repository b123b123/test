<!--
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-11-09 10:39:39
 * @LastEditors: WangBo
 * @LastEditTime: 2022-11-17 10:38:14
-->
<template>
  <div>测试</div>
</template>

<script>
// import { test, default as nihao } from "../utils/index1";
// import { nihao as test } from "../utils/index1";
// import test, { obj, nihao } from "../utils/index1";
import test, { obj, nihao } from "@/utils/index1";
import "../utils/index1";
import "../utils/index1";
import "../utils/index1";
// import * as test from "../utils/index1";
export default {
  mounted() {
    console.log(test);
    console.log(obj);
    console.log(nihao);
    // test.obj.attr = "666";
    // console.log(test);
    // console.log(nihao);
  },
};
</script>
