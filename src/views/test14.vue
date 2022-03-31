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
import comson from './test/ceshi4.vue'
export default {
    components:{
        comson
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