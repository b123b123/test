<!--
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-11-09 10:39:39
 * @LastEditors: WangBo
 * @LastEditTime: 2023-01-20 12:59:47
-->
<template>
  <div>测试</div>
</template>

<script>
import { ColorConsoleLog, config } from "../utils/colorfulconsole";
export default {
  mounted() {
    config.switch = true;
    let test = new ColorConsoleLog({ switch: true });
    test(11213);
    let test2 = new ColorConsoleLog({
      styles: { color: "blue" },
    });
    test2("hello");
    test(1212);
  },
};
</script>
