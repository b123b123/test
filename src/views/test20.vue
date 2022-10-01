<!--
 * @Description: Hello World
 * @Version: 1.0
 * @Author: WangBo
 * @Date: 2022-10-01 10:50:15
 * @LastEditors: WangBo
 * @LastEditTime: 2022-10-01 11:23:38
-->
<template>
  <div>
    <div class="box" @click="test.ceshi('nihaoasasdas'), add">HelloWorld!</div>
    <div class="test">{{ test }}</div>
  </div>
</template>

<script>
export default {
  data() {
    let that = this;
    let test = {
      test: 1,
      nihao: this.add,
      ceshi(a) {
        console.log("this ==> ", this.test);
        console.log("that ==> ", that);
        console.log("a ==> ", a);
      },
    };
    test.ceshi("nihao");
    return {
      test,
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
