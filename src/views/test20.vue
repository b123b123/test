<!--
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-10-01 10:50:15
 * @LastEditors: WangBo
 * @LastEditTime: 2022-11-16 19:21:03
-->
<template>
  <div>
    <div class="box" @click="nihao.ceshi('nihaoasasdas'), add">HelloWorld!</div>
    <div class="test">{{ test }}</div>
    <div class="test">{{ attr }}</div>
    <div class="test">{{ wat() }}</div>
  </div>
</template>

<script>
export default {
  data() {
    let that = this;
    let test = {
      test: 2,
      nihao: that.add,
      ceshi(a) {
        console.log("this ==> ", this.test);
        console.log("a ==> ", a);
        this.nihao();
      },
    };
    return {
      test,
      nihao: test,
      attr: 111,
      wat() {
        return this.test.test + 1;
      },
    };
  },
  methods: {
    add() {
      this.test.test++;
    },
  },
};
</script>

<style scoped>
.test {
  height: 100px;
  background: aquamarine;
}
.box {
  height: 30px;
  background: wheat;
}
</style>
