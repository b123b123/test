<!--
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-11-09 10:39:39
 * @LastEditors: WangBo
 * @LastEditTime: 2023-01-20 12:24:19
-->
<template>
  <div>测试</div>
</template>

<script>
import { ColorConsoleLog } from "../utils/colorfulconsole";
export default {
  mounted() {
    // let test = new ColorConsoleLog().w;

    // let test = new ColorConsoleLog({
    //   identify: "32323",
    //   style: { color: "yellow" },
    // });
    let test = new ColorConsoleLog();
    console.log("test ==> ", test);
  },
};
</script>
