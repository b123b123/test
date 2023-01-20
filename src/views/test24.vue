<!--
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-11-09 10:39:39
 * @LastEditors: WangBo
 * @LastEditTime: 2023-01-20 13:21:07
-->
<template>
  <div>测试</div>
</template>

<script>
import { ColorConsoleLog, config } from "../utils/colorfulconsole";
export default {
  mounted() {
    config.switch = true;
    let test = new ColorConsoleLog({ clear: true });
    test();
    test([12313], { 212312: 1213 }, 2112313);
    test(13123, 12312, 31231, 23134, 3423);
    test("aaaa13123", 12312, 31231, 23134, 3423, 1231, 123123, 123);
    // test();
    // let test2 = new ColorConsoleLog({
    //   styles: { color: "blue" },
    // });
    // test2("hello");
    // test(1212);
  },
};
</script>
