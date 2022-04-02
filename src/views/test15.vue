<template>
  <div>
      测试
      <br>
      {{msg}}
  </div>
</template>

<script>
var clc = require("cli-color");
export default {
    data(){
        return{
            msg:'1'
        }
    },
    mounted(){
        // var msg = clc.xterm(7).bgXterm(78);
        // console.log(msg("Orange text on dark gray background"));
        // console.log(clc.erase.screen);
        // console.log(clc.erase.screenLeft);

        var str = clc.bold("foo1211") + "bar" + clc.red("21w12elo");
        var sliced = clc.slice(str, 1, 17); 
        // console.log(sliced('Hello World!'));
        console.log(sliced);
        this.msg = sliced;


    },
}
</script>

<style>

</style>