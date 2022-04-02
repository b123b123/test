<template>
  <div>
      我是父组件！{{dataparents}}
      经测试，父组件的作用域数据是父组件的，但是，虽然数据不能直接互通，但是DOM渲染完成后DOM是可以直接用的，是互通的。
      <button @click="dataparents ++">点击</button>
      <br>
      <button @click="getColors">颜色随机</button>
      <br>
      <comson v-model="dataparents" :style="{background:wbColor}"></comson>
      {{wbColor}}
  </div>
</template>

<script>
import comson from './test/ceshi4.vue';
var clc = require("cli-color");
export default {
    components:{
        comson
    },
    mounted(){
        // console.log(clc.red("Text in red"));
        // console.log(clc.red.bgGreen.underline("Underlined red text on white background."));
        // console.log(clc.red("red " + clc.blue("blue") + " red"));
        // console.log(clc.red("red") + " plain " + clc.blue("blue"));
        var msg = clc.xterm(7).bgXterm(78);
        console.log(msg("Orange text on dark gray background"));
        // process.stdout.write(clc.reset);
    },
    data(){
        return {
            dataparents:666,
            wbColor:'green'
        }
    },
    created(){
        this.getColors();
    },
    methods:{
        nihaopar(){
            console.log('dataparents...',this.dataparents);
        },
        getColors(){
            this.wbColor =  this.$wbColor.getColor();
        }
    }
}
</script>

<style>

</style>